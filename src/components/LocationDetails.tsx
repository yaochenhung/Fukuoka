import { Location } from '../types';
import { LOCATIONS } from '../data';
import { MapPin, Phone, Clock, Ticket, Sparkles, Navigation, Bookmark, BookmarkCheck, ArrowRight, Heart } from 'lucide-react';

interface LocationDetailsProps {
  location: Location;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  showRouteFromHotel: boolean;
  onToggleRoute: () => void;
  travelMode: 'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT';
  onTravelModeChange: (mode: 'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT') => void;
  calculatedDistance?: string;
  calculatedDuration?: string;
}

export default function LocationDetails({
  location,
  isBookmarked,
  onToggleBookmark,
  showRouteFromHotel,
  onToggleRoute,
  travelMode,
  onTravelModeChange,
  calculatedDistance,
  calculatedDuration
}: LocationDetailsProps) {
  const isHotel = location.id === 'hotel_roi';

  return (
    <div className="bg-white border border-[#E9E5D9] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
      {/* Decorative Header */}
      <div className="bg-[#E9E5D9] px-6 py-5 border-b border-[#D6D0C2] relative">
        <div className="absolute top-4 right-4 flex gap-2">
          {/* Bookmark Button */}
          {!isHotel && (
            <button
              onClick={onToggleBookmark}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-[#6B705C] border-[#6B705C] text-white hover:opacity-90'
                  : 'bg-white border-[#D6D0C2] text-[#8A8A7C] hover:text-[#4A4A48] hover:border-[#B7B7A4]'
              }`}
              title={isBookmarked ? '從我的行程中移除' : '加到我的行程規劃'}
            >
              {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
          )}
        </div>

        <span className="inline-block px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider bg-white/60 border border-[#B7B7A4] text-[#6B705C] rounded-full mb-2">
          {location.area} ・ {location.type === 'hotel' ? '住宿推薦' : location.type === 'food' ? '在地美食' : location.type === 'shopping' ? '購物推薦' : '必訪景點'}
        </span>

        <h2 className="text-xl md:text-2xl font-bold text-[#4A4A48] flex items-baseline gap-2 font-display">
          {location.name}
          {location.jpName && <span className="text-xs font-normal text-[#8A8A7C] font-sans">{location.jpName}</span>}
        </h2>

        <p className="text-xs text-[#4A4A48]/85 mt-2.5 leading-relaxed font-sans">{location.description}</p>
      </div>

      {/* Main Content Sections */}
      <div className="p-6 space-y-6 flex-1 overflow-y-auto">
        {/* Core Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-[#F8F5F2] p-4 rounded-xl border border-[#E9E5D9] text-xs">
          <div className="flex items-start gap-2 text-[#4A4A48]">
            <MapPin className="w-4.5 h-4.5 text-[#6B705C] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">景點地址</span>
              <span className="font-medium">{location.address}</span>
            </div>
          </div>

          {location.phone && (
            <div className="flex items-start gap-2 text-[#4A4A48]">
              <Phone className="w-4.5 h-4.5 text-[#6B705C] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">聯絡電話</span>
                <span className="font-mono">{location.phone}</span>
              </div>
            </div>
          )}

          {location.openingHours && (
            <div className="flex items-start gap-2 text-[#4A4A48]">
              <Clock className="w-4.5 h-4.5 text-[#6B705C] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">開放時間</span>
                <span>{location.openingHours}</span>
              </div>
            </div>
          )}

          {location.tickets && (
            <div className="flex items-start gap-2 text-[#4A4A48]">
              <Ticket className="w-4.5 h-4.5 text-[#6B705C] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">門票收費</span>
                <span>{location.tickets}</span>
              </div>
            </div>
          )}
        </div>

        {/* Real-time routing controller */}
        {!isHotel && (
          <div className="bg-[#F1EDE4] border border-[#E9E5D9] rounded-xl p-4">
            <div className="flex items-center justify-between gap-4 mb-3.5">
              <div className="flex items-center gap-1.5">
                <Navigation className="w-4.5 h-4.5 text-[#6B705C]" />
                <h3 className="text-xs font-bold text-[#4A4A48]">地圖即時導航繪製</h3>
              </div>
              
              <button
                onClick={onToggleRoute}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  showRouteFromHotel
                    ? 'bg-[#B7B7A4] hover:bg-[#A5A58D] text-[#4A4A48] font-bold border border-[#A5A58D]/30'
                    : 'bg-[#6B705C] hover:opacity-90 text-white font-bold'
                }`}
              >
                {showRouteFromHotel ? '關閉導航' : '顯示從飯店出發路線'}
              </button>
            </div>

            {showRouteFromHotel && (
              <div className="space-y-3 pt-2.5 border-t border-[#D6D0C2]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xs text-[#8A8A7C] uppercase tracking-wider font-semibold">選擇導航方式：</span>
                  <div className="inline-flex bg-white p-0.5 rounded-lg border border-[#D6D0C2]">
                    <button
                      onClick={() => onTravelModeChange('TRANSIT')}
                      className={`px-2.5 py-1 text-2xs font-semibold rounded-md transition ${
                        travelMode === 'TRANSIT' ? 'bg-[#E9E5D9] text-[#6B705C]' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
                      }`}
                    >
                      大眾運輸
                    </button>
                    <button
                      onClick={() => onTravelModeChange('WALKING')}
                      className={`px-2.5 py-1 text-2xs font-semibold rounded-md transition ${
                        travelMode === 'WALKING' ? 'bg-[#E9E5D9] text-[#6B705C]' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
                      }`}
                    >
                      徒步
                    </button>
                    <button
                      onClick={() => onTravelModeChange('DRIVING')}
                      className={`px-2.5 py-1 text-2xs font-semibold rounded-md transition ${
                        travelMode === 'DRIVING' ? 'bg-[#E9E5D9] text-[#6B705C]' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
                      }`}
                    >
                      開車
                    </button>
                  </div>
                </div>

                {calculatedDistance && calculatedDuration && (
                  <div className="bg-white p-2.5 rounded-lg border border-[#D6D0C2] flex justify-between items-center text-xs shadow-2xs">
                    <span className="text-[#8A8A7C]">系統估計路程：</span>
                    <div className="flex gap-3 font-semibold text-[#6B705C] font-mono">
                      <span>{calculatedDistance}</span>
                      <span className="text-[#D6D0C2]">|</span>
                      <span>{calculatedDuration}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Detailed highlights list */}
        {location.details && location.details.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-[#8A8A7C] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#B28E63]" />
              景點細節與特色亮點
            </h3>
            <ul className="space-y-2 text-xs text-[#4A4A48]">
              {location.details.map((detail, index) => (
                <li key={index} className="flex gap-2 leading-relaxed">
                  <span className="text-[#6B705C] shrink-0 font-bold">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* How to Get There (Directions) */}
        {location.transport && location.transport.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-[#D6D0C2]">
            <h3 className="text-xs font-bold text-[#8A8A7C] uppercase tracking-wider flex items-center gap-1">
              <Navigation className="w-4 h-4 text-[#6B705C]" />
              詳細交通方式
            </h3>
            <div className="relative pl-4 border-l-2 border-[#E9E5D9] space-y-4">
              {location.transport.map((step, index) => (
                <div key={index} className="relative text-xs text-[#4A4A48] leading-relaxed">
                  {/* Step bubble marker */}
                  <span className="absolute -left-[21px] top-0.5 w-2 h-2 rounded-full bg-[#6B705C] ring-4 ring-white"></span>
                  <span className="font-semibold text-[#8A8A7C] mr-1.5">步驟 {index + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Tips */}
        {location.tips && location.tips.length > 0 && (
          <div className="bg-[#6B705C]/5 border border-[#6B705C]/25 rounded-xl p-4.5 space-y-2">
            <h4 className="text-xs font-bold text-[#6B705C] flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#6B705C]" />
              小編私房遊玩建議 (Tips)
            </h4>
            <div className="text-xs text-[#4A4A48]/90 leading-relaxed space-y-1.5">
              {location.tips.map((tip, idx) => (
                <p key={idx}>{tip}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
