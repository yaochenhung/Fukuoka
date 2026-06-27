import { useState, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { Coordinates, Location } from '../types';
import { LOCATIONS } from '../data';
import RouteDisplay from './RouteDisplay';
import { MapPin, Hotel, Navigation, Key, ExternalLink, Copy, Check, Sparkles, Compass, AlertTriangle } from 'lucide-react';

interface MapContainerProps {
  selectedLocation: Location;
  showRouteFromHotel: boolean;
  travelMode: 'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT';
  onRouteCalculated?: (distance: string, duration: string) => void;
  onLocationSelect: (location: Location) => void;
}

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

// Simple sanity check for a real-looking key
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY !== 'MY_GOOGLE_MAPS_PLATFORM_KEY' && API_KEY.trim() !== '';

export default function MapContainer({
  selectedLocation,
  showRouteFromHotel,
  travelMode,
  onRouteCalculated,
  onLocationSelect
}: MapContainerProps) {
  const [copied, setCopied] = useState(false);
  const [showTutorial, setShowTutorial] = useState(!hasValidKey);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const hotelLocation = LOCATIONS.find(l => l.id === 'hotel_roi');

  const copySecretName = () => {
    navigator.clipboard.writeText('GOOGLE_MAPS_PLATFORM_KEY');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMarkerColor = (loc: Location) => {
    if (loc.id === 'hotel_roi') return '#EF4444'; // Red for hotel
    if (loc.type === 'food') return '#F59E0B'; // Amber for food
    if (loc.type === 'shopping') return '#10B981'; // Emerald for shopping
    return '#3B82F6'; // Blue for attractions
  };

  const getEmbedUrl = (loc: Location) => {
    // Generate a secure standard Google Map embed that works without an API key
    const query = encodeURIComponent(`${loc.name} ${loc.address}`);
    return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className="relative w-full h-full min-h-[400px] lg:h-full bg-[#F8F5F2] rounded-2xl overflow-hidden shadow-xl border border-[#E9E5D9] flex flex-col">
      {/* Top Bar for Map Info / API Key Status */}
      <div className="bg-[#E9E5D9] px-4 py-3 border-b border-[#D6D0C2] flex flex-wrap items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#6B705C] animate-spin-slow" />
          <span className="text-sm font-semibold text-[#4A4A48]">
            {selectedLocation ? `正在瀏覽：${selectedLocation.name}` : '福岡探索地圖'}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {!hasValidKey ? (
            <button
              onClick={() => setShowTutorial(!showTutorial)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-[#B28E63]/15 border border-[#B28E63]/30 text-[#B28E63] rounded-full hover:bg-[#B28E63]/25 transition-all cursor-pointer"
            >
              <Key className="w-3.5 h-3.5" />
              {showTutorial ? '顯示地圖預覽' : '💡 點我啟用 API 即時導航'}
            </button>
          ) : (
            <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-[#6B705C]/10 border border-[#6B705C]/25 text-[#6B705C] rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#6B705C]" />
              API 已啟動・支援即時線路與導航
            </span>
          )}
        </div>
      </div>

      {/* Tutorial Overlay or Panel */}
      {showTutorial && (
        <div className="absolute inset-x-0 top-[45px] max-h-[85%] bg-[#F8F5F2]/98 border-b border-[#E9E5D9] p-6 overflow-y-auto z-20 transition-all duration-300 backdrop-blur-md">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-2 text-[#B28E63] mb-3">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-base font-bold">啟用 Google Maps API 即時導航</h3>
            </div>
            
            <p className="text-xs text-[#4A4A48]/90 leading-relaxed mb-4">
              您目前使用的是<strong>免費預覽嵌入地圖</strong>。若想要啟用<strong>動態線路繪製、即時導航計算與客製化標記</strong>，請按照以下步驟綁定您的 Google Maps API Key：
            </p>

            <div className="space-y-3.5 text-xs text-[#4A4A48]/90">
              <div className="bg-white p-3 rounded-lg border border-[#E9E5D9]">
                <span className="font-bold text-[#6B705C] block mb-1">第一步：獲取金鑰</span>
                <a
                  href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 hover:underline font-semibold"
                >
                  前往 Google Cloud 主控台申請金鑰
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-white p-3 rounded-lg border border-[#E9E5D9]">
                <span className="font-bold text-[#6B705C] block mb-1">第二步：複製環境變數名稱</span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <code className="bg-[#F1EDE4] text-[#6B705C] px-2 py-1 rounded border border-[#D6D0C2] font-mono text-2xs select-all">
                    GOOGLE_MAPS_PLATFORM_KEY
                  </code>
                  <button
                    onClick={copySecretName}
                    className="flex items-center gap-1 bg-[#E9E5D9] text-[#4A4A48] px-2.5 py-1 rounded hover:bg-[#D6D0C2] transition cursor-pointer font-semibold"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#4A4A48]" />}
                    <span>{copied ? '已複製' : '複製'}</span>
                  </button>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-[#E9E5D9]">
                <span className="font-bold text-[#6B705C] block mb-1">第三步：將金鑰填入系統</span>
                <ul className="list-decimal pl-4 space-y-1.5 text-[#8A8A7C]">
                  <li>點擊右上角齒輪 <strong>Settings (設定)</strong> 按鈕。</li>
                  <li>選擇 <strong>Secrets (金鑰)</strong> 頁籤。</li>
                  <li>新增名稱為 <code className="text-[#6B705C] font-mono text-[10px]">GOOGLE_MAPS_PLATFORM_KEY</code> 的 Secret。</li>
                  <li>貼上您剛才申請的 Google API 金鑰，儲存即可。</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowTutorial(false)}
              className="mt-5 w-full py-2 bg-[#6B705C] text-white font-semibold text-xs rounded-lg shadow-md hover:opacity-95 active:scale-98 transition cursor-pointer"
            >
              了解，返回預覽地圖
            </button>
          </div>
        </div>
      )}

      {/* Map Display area */}
      <div className="flex-1 w-full relative min-h-[350px]">
        {hasValidKey ? (
          <APIProvider apiKey={API_KEY} version="weekly">
            <Map
              defaultCenter={selectedLocation.coordinates}
              defaultZoom={13}
              mapId="FUKUOKA_TRAVEL_MAP"
              center={selectedLocation.coordinates}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
              className="w-full h-full"
            >
              {/* Hotel Marker (ROI) */}
              {hotelLocation && (
                <AdvancedMarker
                  position={hotelLocation.coordinates}
                  title={hotelLocation.name}
                  onClick={() => {
                    onLocationSelect(hotelLocation);
                    setActiveMarkerId(hotelLocation.id);
                  }}
                >
                  <Pin background="#EF4444" glyphColor="#fff" scale={1.1}>
                    <Hotel className="w-3.5 h-3.5 text-white" />
                  </Pin>
                </AdvancedMarker>
              )}

              {/* All Other Markers */}
              {LOCATIONS.filter(l => l.id !== 'hotel_roi').map(loc => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <AdvancedMarker
                    key={loc.id}
                    position={loc.coordinates}
                    title={loc.name}
                    onClick={() => {
                      onLocationSelect(loc);
                      setActiveMarkerId(loc.id);
                    }}
                  >
                    <Pin
                      background={getMarkerColor(loc)}
                      borderColor={isSelected ? '#FFFFFF' : getMarkerColor(loc)}
                      glyphColor="#fff"
                      scale={isSelected ? 1.2 : 0.9}
                    />
                  </AdvancedMarker>
                );
              })}

              {/* Info Window */}
              {activeMarkerId && (() => {
                const activeLoc = LOCATIONS.find(l => l.id === activeMarkerId);
                if (!activeLoc) return null;
                return (
                  <InfoWindow
                    position={activeLoc.coordinates}
                    onCloseClick={() => setActiveMarkerId(null)}
                  >
                    <div className="p-1 max-w-[200px] text-slate-800">
                      <h4 className="font-bold text-xs">{activeLoc.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{activeLoc.description}</p>
                      <button
                        onClick={() => onLocationSelect(activeLoc)}
                        className="text-[10px] text-teal-600 font-semibold hover:underline mt-1 block"
                      >
                        查看詳細介紹與交通
                      </button>
                    </div>
                  </InfoWindow>
                );
              })()}

              {/* Real-time routing displaying */}
              {showRouteFromHotel && hotelLocation && selectedLocation.id !== 'hotel_roi' && (
                <RouteDisplay
                  origin={hotelLocation.coordinates}
                  destination={selectedLocation.coordinates}
                  travelMode={travelMode}
                  onRouteCalculated={onRouteCalculated}
                />
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Fallback Free Interactive Google Maps Embed with zero costs / no API key requirements */
          <div className="w-full h-full relative">
            <iframe
              src={getEmbedUrl(selectedLocation)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fukuoka Map Preview"
              className="w-full h-full"
            ></iframe>
            
            {/* Overlay hint about static preview */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-[#D6D0C2] flex items-center justify-between gap-2 shadow-lg">
              <span className="text-[11px] text-[#4A4A48] font-medium">
                🗺️ 目前為免費地圖預覽。
              </span>
              <button
                onClick={() => setShowTutorial(true)}
                className="text-[11px] text-[#6B705C] hover:text-[#4A4A48] font-bold cursor-pointer flex items-center gap-1"
              >
                解鎖即時導航
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Routing details block if route calculated */}
      {showRouteFromHotel && selectedLocation.id !== 'hotel_roi' && (
        <div className="bg-[#F1EDE4] p-3.5 border-t border-[#D6D0C2] text-xs text-[#4A4A48] flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-[#6B705C]" />
            <span>從 <strong>Hotel ROI 博多</strong> 出發的導航路徑</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-[#D6D0C2] shadow-3xs">
            <div>
              <span className="text-[#8A8A7C]">方式：</span>
              <span className="font-bold text-[#6B705C]">
                {travelMode === 'WALKING' ? '徒步' : travelMode === 'TRANSIT' ? '大眾運輸' : '開車'}
              </span>
            </div>
            {hasValidKey ? (
              <span className="text-[#8A8A7C]">| 獲取即時路況中...</span>
            ) : (
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${hotelLocation?.coordinates.lat},${hotelLocation?.coordinates.lng}&destination=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}&travelmode=${travelMode.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline flex items-center gap-0.5 font-bold"
              >
                於 Google Maps 開啟導航
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
