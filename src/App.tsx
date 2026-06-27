import { useState, useEffect } from 'react';
import { LOCATIONS } from './data';
import { Location } from './types';
import MapContainer from './components/MapContainer';
import LocationDetails from './components/LocationDetails';
import TimetableDisplay from './components/TimetableDisplay';
import ItineraryPlanner from './components/ItineraryPlanner';
import {
  Compass,
  Map,
  Train,
  Calendar,
  Sparkles,
  MapPin,
  Hotel,
  Utensils,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  Filter,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'attractions' | 'timetables' | 'planner'>('attractions');
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);
  const [selectedArea, setSelectedArea] = useState<string>('全部區域');
  const [selectedType, setSelectedType] = useState<string>('all');
  
  // Bookmarks state (synchronized with localStorage for client-side persistence)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  
  // Route display state
  const [showRouteFromHotel, setShowRouteFromHotel] = useState<boolean>(false);
  const [travelMode, setTravelMode] = useState<'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT'>('TRANSIT');
  const [calculatedDistance, setCalculatedDistance] = useState<string>('');
  const [calculatedDuration, setCalculatedDuration] = useState<string>('');

  // Mobile Map overlay state
  const [mobileShowMap, setMobileShowMap] = useState<boolean>(false);

  // Initialize bookmarks from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('fukuoka_bookmarks');
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading bookmarks from localStorage:', e);
    }
  }, []);

  // Update localStorage when bookmarks change
  const saveBookmarks = (newIds: string[]) => {
    setBookmarkedIds(newIds);
    try {
      localStorage.setItem('fukuoka_bookmarks', JSON.stringify(newIds));
    } catch (e) {
      console.error('Error saving bookmarks to localStorage:', e);
    }
  };

  const handleToggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      saveBookmarks(bookmarkedIds.filter(bId => bId !== id));
    } else {
      saveBookmarks([...bookmarkedIds, id]);
    }
  };

  const handleAddBookmark = (id: string) => {
    if (!bookmarkedIds.includes(id)) {
      saveBookmarks([...bookmarkedIds, id]);
    }
  };

  const handleReorderBookmarks = (index: number, direction: 'up' | 'down') => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= bookmarkedIds.length) return;
    
    const reordered = [...bookmarkedIds];
    const temp = reordered[index];
    reordered[index] = reordered[nextIndex];
    reordered[nextIndex] = temp;
    saveBookmarks(reordered);
  };

  // Turn route off automatically if the user switches locations
  const handleLocationSelect = (loc: Location) => {
    setSelectedLocation(loc);
    setShowRouteFromHotel(false);
    setCalculatedDistance('');
    setCalculatedDuration('');
    // On mobile, automatically show the map if they click a spot
    if (window.innerWidth < 1024) {
      setMobileShowMap(true);
    }
  };

  // Grouped areas for filter list
  const AREAS = ['全部區域', '博多', '天神', '大濠公園', '門司港・小倉', '太宰府・柳川', '海之中道'];

  // Filter locations based on filters
  const filteredLocations = LOCATIONS.filter(loc => {
    const matchesArea = selectedArea === '全部區域' || loc.area === selectedArea;
    const matchesType = selectedType === 'all' || loc.type === selectedType;
    return matchesArea && matchesType;
  });

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#4A4A48] flex flex-col font-sans selection:bg-[#6B705C]/30 selection:text-[#6B705C]">
      
      {/* Dynamic Header */}
      <header className="relative bg-[#E9E5D9] border-b border-[#D6D0C2] px-4 py-6 md:px-8 md:py-8 overflow-hidden">
        {/* Abstract back decorative glowing orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6B705C]/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#DDBEA9]/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center bg-[#6B705C]/15 text-[#6B705C] p-1.5 rounded-lg border border-[#6B705C]/30">
                <Compass className="w-5 h-5 text-[#6B705C]" />
              </span>
              <span className="text-2xs font-bold text-[#6B705C] uppercase tracking-widest bg-[#6B705C]/5 border border-[#6B705C]/15 px-2.5 py-0.5 rounded-full">
                日本九州・自助旅行寶典
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3.5xl font-bold text-[#4A4A48] tracking-tight font-display">
              福岡極致旅遊與大眾運輸全攻略
            </h1>
            
            <p className="text-xs md:text-sm text-[#8A8A7C] max-w-2xl leading-relaxed">
              整合<strong>住宿規劃、熱門景點、在地美食、藥妝超市</strong>以及<strong>交通時刻表</strong>。支援 Google Maps 實境地圖，為您規劃最流暢的福岡之旅。
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex flex-wrap items-center gap-4 bg-white/80 p-4 rounded-xl border border-[#D6D0C2] backdrop-blur-sm self-start md:self-auto text-xs shadow-sm">
            <div className="text-center px-3 border-r border-[#D6D0C2]">
              <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">景點總數</span>
              <span className="text-base font-bold text-[#6B705C] font-mono">{LOCATIONS.length} 個</span>
            </div>
            <div className="text-center px-3 border-r border-[#D6D0C2]">
              <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">美食推薦</span>
              <span className="text-base font-bold text-[#B28E63] font-mono">8 項</span>
            </div>
            <div className="text-center px-3">
              <span className="text-[#8A8A7C] block text-3xs font-semibold uppercase tracking-wider">自訂行程</span>
              <span className="text-base font-bold text-[#A5A58D] font-mono">{bookmarkedIds.length} 站</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs Bar */}
      <nav className="bg-[#F1EDE4] border-b border-[#D6D0C2] sticky top-0 z-40 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            <button
              onClick={() => setActiveTab('attractions')}
              className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'attractions'
                  ? 'bg-white border border-[#B7B7A4] text-[#6B705C] shadow-sm'
                  : 'text-[#8A8A7C] hover:text-[#4A4A48] border border-transparent'
              }`}
            >
              <Map className="w-4 h-4" />
              景點與即時導航
            </button>
            <button
              onClick={() => setActiveTab('timetables')}
              className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'timetables'
                  ? 'bg-white border border-[#B7B7A4] text-[#6B705C] shadow-sm'
                  : 'text-[#8A8A7C] hover:text-[#4A4A48] border border-transparent'
              }`}
            >
              <Train className="w-4 h-4" />
              交通與轉乘時刻表
            </button>
            <button
              onClick={() => setActiveTab('planner')}
              className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'planner'
                  ? 'bg-white border border-[#B7B7A4] text-[#6B705C] shadow-sm'
                  : 'text-[#8A8A7C] hover:text-[#4A4A48] border border-transparent'
              }`}
            >
              <Calendar className="w-4 h-4" />
              行程規劃與美食超市
            </button>
          </div>

          {/* Mobile Map Toggle Trigger Button */}
          <button
            onClick={() => setMobileShowMap(!mobileShowMap)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#E9E5D9] text-xs text-[#4A4A48] font-bold rounded-lg border border-[#D6D0C2] transition cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#6B705C]" />
            <span>{mobileShowMap ? '顯示內容' : '展開地圖'}</span>
          </button>
        </div>
      </nav>

      {/* Main Container Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        
        {/* Left Interactive Content Panels (Take 7 cols out of 12) */}
        <div className={`lg:col-span-7 space-y-6 ${mobileShowMap ? 'hidden lg:block' : 'block'}`}>
          {activeTab === 'attractions' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Attraction Filter and List Selector (Left column of tab) */}
              <div className="md:col-span-5 bg-white border border-[#E9E5D9] rounded-2xl p-4.5 space-y-4 shadow-sm">
                
                {/* Area filter */}
                <div className="space-y-2">
                  <span className="text-3xs font-bold uppercase tracking-wider text-[#8A8A7C] flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-[#6B705C]" />
                    選擇遊玩區域
                  </span>
                  <div className="flex flex-col gap-1 max-h-[180px] overflow-y-auto pr-1">
                    {AREAS.map(area => (
                      <button
                        key={area}
                        onClick={() => setSelectedArea(area)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedArea === area
                            ? 'bg-[#6B705C] text-white font-bold shadow-sm'
                            : 'text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#F1EDE4]'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div className="space-y-1.5 pt-3.5 border-t border-[#E9E5D9]">
                  <span className="text-3xs font-bold uppercase tracking-wider text-[#8A8A7C] block">分類過濾</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => setSelectedType('all')}
                      className={`px-2 py-1.5 rounded-lg text-2xs font-semibold text-center border cursor-pointer transition ${
                        selectedType === 'all'
                          ? 'bg-[#E9E5D9] border-[#6B705C] text-[#6B705C] font-bold'
                          : 'border-[#E9E5D9] text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#F8F5F2]'
                      }`}
                    >
                      全部推薦
                    </button>
                    <button
                      onClick={() => setSelectedType('hotel')}
                      className={`px-2 py-1.5 rounded-lg text-2xs font-semibold text-center border cursor-pointer transition ${
                        selectedType === 'hotel'
                          ? 'bg-[#E9E5D9] border-[#6B705C] text-[#6B705C] font-bold'
                          : 'border-[#E9E5D9] text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#F8F5F2]'
                      }`}
                    >
                      住宿
                    </button>
                    <button
                      onClick={() => setSelectedType('attraction')}
                      className={`px-2 py-1.5 rounded-lg text-2xs font-semibold text-center border cursor-pointer transition ${
                        selectedType === 'attraction'
                          ? 'bg-[#E9E5D9] border-[#6B705C] text-[#6B705C] font-bold'
                          : 'border-[#E9E5D9] text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#F8F5F2]'
                      }`}
                    >
                      景點
                    </button>
                    <button
                      onClick={() => setSelectedType('shopping')}
                      className={`px-2 py-1.5 rounded-lg text-2xs font-semibold text-center border cursor-pointer transition ${
                        selectedType === 'shopping'
                          ? 'bg-[#E9E5D9] border-[#6B705C] text-[#6B705C] font-bold'
                          : 'border-[#E9E5D9] text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#F8F5F2]'
                      }`}
                    >
                      購物
                    </button>
                  </div>
                </div>

                {/* Spot List scroll block */}
                <div className="space-y-2 pt-3.5 border-t border-[#E9E5D9]">
                  <span className="text-3xs font-bold uppercase tracking-wider text-[#8A8A7C] block">
                    景點清單 ({filteredLocations.length})
                  </span>
                  <div className="space-y-1.5 max-h-[350px] overflow-y-auto pr-1">
                    {filteredLocations.map(loc => {
                      const isSelected = selectedLocation.id === loc.id;
                      return (
                        <button
                          key={loc.id}
                          onClick={() => handleLocationSelect(loc)}
                          className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex flex-col gap-1 relative overflow-hidden cursor-pointer ${
                            isSelected
                              ? 'bg-[#F1EDE4] border-[#B7B7A4] shadow-sm'
                              : 'bg-white/40 border-[#E9E5D9] hover:border-[#B7B7A4] hover:bg-white/80'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className={`text-xs font-bold truncate ${isSelected ? 'text-[#6B705C]' : 'text-[#4A4A48]'}`}>
                              {loc.name}
                            </span>
                            <span className="text-3xs px-1.5 py-0.5 rounded font-bold bg-[#F1EDE4] border border-[#D6D0C2] text-[#8A8A7C] shrink-0">
                              {loc.area}
                            </span>
                          </div>
                          <span className="text-3xs text-[#8A8A7C] line-clamp-1">{loc.address}</span>
                          
                          {/* Accent edge highlight for selected item */}
                          {isSelected && <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#6B705C]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Spot Information Details Page */}
              <div className="md:col-span-7 h-full">
                <LocationDetails
                  location={selectedLocation}
                  isBookmarked={bookmarkedIds.includes(selectedLocation.id)}
                  onToggleBookmark={() => handleToggleBookmark(selectedLocation.id)}
                  showRouteFromHotel={showRouteFromHotel}
                  onToggleRoute={() => setShowRouteFromHotel(!showRouteFromHotel)}
                  travelMode={travelMode}
                  onTravelModeChange={setTravelMode}
                  calculatedDistance={calculatedDistance}
                  calculatedDuration={calculatedDuration}
                />
              </div>

            </div>
          )}

          {activeTab === 'timetables' && <TimetableDisplay />}

          {activeTab === 'planner' && (
            <ItineraryPlanner
              bookmarkedIds={bookmarkedIds}
              onRemoveBookmark={handleToggleBookmark}
              onReorderBookmarks={handleReorderBookmarks}
              onLocationSelect={handleLocationSelect}
              onAddBookmark={handleAddBookmark}
            />
          )}
        </div>

        {/* Right Sticky Map Component Panel (Take 5 cols out of 12) */}
        <div className={`lg:col-span-5 h-[450px] lg:h-[calc(100vh-160px)] lg:sticky lg:top-[76px] ${mobileShowMap ? 'block w-full h-[550px]' : 'hidden lg:block'}`}>
          
          {/* Mobile close map overlay button */}
          {mobileShowMap && (
            <button
              onClick={() => setMobileShowMap(false)}
              className="lg:hidden absolute top-4 left-4 z-30 p-2 bg-white rounded-xl border border-[#D6D0C2] text-[#4A4A48] shadow-md cursor-pointer flex items-center gap-1 text-xs"
            >
              <X className="w-4 h-4 text-rose-500" />
              <span>關閉地圖返回內容</span>
            </button>
          )}

          <MapContainer
            selectedLocation={selectedLocation}
            showRouteFromHotel={showRouteFromHotel}
            travelMode={travelMode}
            onRouteCalculated={(dist, dur) => {
              setCalculatedDistance(dist);
              setCalculatedDuration(dur);
            }}
            onLocationSelect={handleLocationSelect}
          />
        </div>

      </main>

      {/* Footer credits and system states */}
      <footer className="bg-[#E9E5D9] border-t border-[#D6D0C2] py-6 px-4 text-center text-xs text-[#8A8A7C] space-y-2 mt-auto">
        <p>福氣滿滿・福岡旅遊與大眾運輸導航攻略版權所有 © 2026 福岡自在探險家</p>
        <p className="text-3xs text-[#8A8A7C]/85">
          此網頁完美適應全螢幕/平板與手機，並整合最新 Google Maps Platform 及 Directions API 提供即時路網規畫
        </p>
      </footer>
    </div>
  );
}
