import { Location } from '../types';
import { LOCATIONS } from '../data';
import {
  Utensils,
  ShoppingBag,
  ListOrdered,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Sparkles,
  ExternalLink,
  MapPin,
  CalendarDays,
  Info
} from 'lucide-react';

interface ItineraryPlannerProps {
  bookmarkedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onReorderBookmarks: (index: number, direction: 'up' | 'down') => void;
  onLocationSelect: (loc: Location) => void;
  onAddBookmark: (id: string) => void;
}

export default function ItineraryPlanner({
  bookmarkedIds,
  onRemoveBookmark,
  onReorderBookmarks,
  onLocationSelect,
  onAddBookmark
}: ItineraryPlannerProps) {
  const bookmarks = bookmarkedIds
    .map(id => LOCATIONS.find(l => l.id === id))
    .filter((l): l is Location => !!l);

  // Curated Food Spots from PDF
  const FOOD_GUIDE = [
    {
      name: 'はかたや (博多拉麵店)',
      type: '拉麵',
      area: '博多川端商店街',
      desc: '博多川端商店街內的超級平民美味。在拉麵平均 500~600 日圓的博多，這裡竟然只需 290 日圓！CP 值驚人，便宜又好吃，絕對不容錯過。'
    },
    {
      name: '川端どさんこ (拉麵老店)',
      type: '拉麵',
      area: '博多川端商店街',
      desc: '創業 46 年的味噌與醬油拉麵老名店，深受當地老百姓喜愛。用餐尖峰時段座無虛席，吧台位置總是爆滿。'
    },
    {
      name: '肉肉烏龍麵 (肉肉うどん)',
      type: '烏龍麵',
      area: '川端商店街旁',
      desc: '與一般清淡大骨湯頭不同，這家烏龍麵採用生薑與黑醬油熬製。湯頭呈現深醬色，喝起來有薑的辛辣與微甜，具有極高辨識度。'
    },
    {
      name: '長浜家 (屋台拉麵)',
      type: '拉麵',
      area: '祇園・中洲',
      desc: '源於博多路邊攤「屋台」出身的元祖級拉麵店。保留了傳統博多細麵與濃郁豚骨湯頭，是品嚐道地大眾文化的必去之處。'
    },
    {
      name: 'ひょうたんの回転寿司 (葫蘆壽司)',
      type: '迴轉壽司',
      area: '天神 Solaria Stage B2',
      desc: '天神地區最火爆的排隊人氣壽司店。老師傅親捏，每日提供約 50 種新鮮漁獲。名物「佐賀牛排卷（¥500）」與高 CP 值外帶餐盤大受歡迎。'
    },
    {
      name: '元祖本吉屋 (鰻魚蒸籠飯)',
      type: '鰻魚飯',
      area: '柳川市旭町',
      desc: '擁有超過三百年歷史的鰻魚飯始祖店。傳承自江戶時代的秘製醬汁炭火烤工，將蒲燒鰻魚鋪在淋了醬汁的米飯上，盛入漆器竹籠蒸製，香氣撲鼻。'
    },
    {
      name: '民藝茶屋 「六騎」',
      type: '鰻魚飯',
      area: '柳川御花附近',
      desc: '鄰近柳川遊船下船點「御花」的知名小店。招牌鰻魚蒸籠飯肉質綿軟、甜鹹適中，CP 值極佳，極受旅客青睞。'
    },
    {
      name: 'BEAR FRUIT (燒咖哩)',
      type: '焗烤咖哩',
      area: '門司港車站旁',
      desc: '門司港必吃的代表美食。焗烤咖哩上鋪著厚厚的雙色起司和滑嫩雞蛋，濃郁焦香。BEAR FRUIT 也是許多藝人名流朝聖的愛店。'
    }
  ];

  // Curated Supermarkets from PDF
  const SUPERMARKETS = [
    {
      name: '博多 LOPIA 超市 (Lopia)',
      area: '博多站筑紫口',
      location: 'Yodobashi 4 樓',
      desc: '博多車站旁最火的巨型超市。肉品與熟食極具特色，壽司盤和比臉大披薩便宜又美味。'
    },
    {
      name: 'Reganet Cute TERASO II 店',
      area: '博多站東',
      location: '筑紫口步行約 6 分鐘',
      desc: '精緻便利型超市，熟食和便當選擇非常豐富，距離博多車站近，非常適合補貨。'
    },
    {
      name: 'Reganet Cute 巴士總站店',
      area: '博多巴士總站',
      location: '博多巴士總站 B1F',
      desc: '搭公車或回飯店前最順路的超市，各式零食、生鮮、飲品一應俱全。'
    },
    {
      name: '永旺 SHOPPERS (AEON)',
      area: '天神區域',
      location: '地鐵天神站旁，走路 3-5 分鐘',
      desc: '天神核心區的巨型商場，除了地下一樓的生鮮食品大超市，樓上還設有大創 (DAISO) 百元商店、化妝品專櫃及生活百貨，一站買齊！'
    },
    {
      name: 'Daiei 超市 (24小時)',
      area: '祇園 / 天神',
      location: '櫛田神社對面 / 天神 4 丁目',
      desc: '祇園店位於櫛田神社正對面，為 24 小時營業！半夜肚子餓或者買宵夜的最佳去處。'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column: Interactive Planner */}
      <div className="lg:col-span-5 bg-white border border-[#E9E5D9] rounded-2xl p-5 md:p-6 shadow-lg flex flex-col">
        <h2 className="text-lg font-bold text-[#4A4A48] flex items-center gap-2 mb-2 font-display">
          <CalendarDays className="w-5.5 h-5.5 text-[#6B705C]" />
          我的福岡自訂行程
        </h2>
        <p className="text-xs text-[#8A8A7C] mb-5">點擊景點頁面的「加入行程」，在下方自由排列，打造完美行程</p>

        {bookmarks.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#F8F5F2] border border-[#E9E5D9] rounded-xl min-h-[220px]">
            <ListOrdered className="w-10 h-10 text-[#B7B7A4] mb-3 animate-bounce-slow" />
            <p className="text-xs font-medium text-[#4A4A48]/90">目前尚無自訂行程</p>
            <p className="text-2xs text-[#8A8A7C] mt-1 max-w-[180px]">
              請前往第一個頁籤瀏覽景點，將喜愛的旅館和景點加入吧！
            </p>
          </div>
        ) : (
          <div className="flex-1 space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {bookmarks.map((loc, index) => (
              <div
                key={loc.id}
                className="group flex items-center gap-3 bg-[#F8F5F2] p-3 rounded-xl border border-[#E9E5D9] hover:border-[#B7B7A4] hover:bg-[#F1EDE4] transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 flex items-center justify-center bg-[#6B705C]/15 border border-[#6B705C]/35 text-[#6B705C] font-mono text-2xs rounded-full font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#4A4A48] truncate group-hover:text-[#6B705C] transition-colors">
                      {loc.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-2xs text-[#8A8A7C] pl-6">
                    <MapPin className="w-3 h-3 text-[#B7B7A4]" />
                    <span>{loc.area}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onReorderBookmarks(index, 'up')}
                    disabled={index === 0}
                    className="p-1.5 text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#E9E5D9] rounded disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
                    title="上移"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onReorderBookmarks(index, 'down')}
                    disabled={index === bookmarks.length - 1}
                    className="p-1.5 text-[#8A8A7C] hover:text-[#4A4A48] hover:bg-[#E9E5D9] rounded disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
                    title="下移"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onLocationSelect(loc)}
                    className="px-2 py-1 bg-[#E9E5D9] text-[#6B705C] text-2xs font-bold rounded hover:bg-[#D6D0C2] transition cursor-pointer"
                  >
                    定位
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(loc.id)}
                    className="p-1.5 text-rose-600 hover:text-rose-700 hover:bg-rose-500/10 rounded transition cursor-pointer"
                    title="刪除"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 bg-[#6B705C]/5 border border-[#6B705C]/20 p-4 rounded-xl text-2xs text-[#4A4A48]/90 space-y-2">
          <span className="font-bold text-[#6B705C] flex items-center gap-1">
            <Info className="w-4 h-4" />
            快速規劃建議：
          </span>
          <p>
            1. 建議以 <strong>Hotel ROI 博多</strong> 為第一站，方便辦理入住並卸下行李。<br />
            2. 博多與天神地區景點（如住吉神社、水鏡天滿宮）可安排在首尾兩日市區漫步。<br />
            3. 太宰府與柳川剛好位於同一條西鐵大牟田線上，極力推薦購買西鐵一日套票，早上去太宰府參拜、下午至柳川遊船吃鰻魚飯，行程最順暢！
          </p>
        </div>
      </div>

      {/* Right Column: Delicacies & Supermarket Wiki */}
      <div className="lg:col-span-7 space-y-6">
        {/* Food Wiki */}
        <div className="bg-white border border-[#E9E5D9] rounded-2xl p-5 md:p-6 shadow-lg">
          <h2 className="text-lg font-bold text-[#4A4A48] flex items-center gap-2 mb-1 font-display">
            <Utensils className="w-5 h-5 text-[#B28E63]" />
            福岡特色美食地圖
          </h2>
          <p className="text-xs text-[#8A8A7C] mb-4">整理自旅行日誌，精選福岡在地人熱烈捧場的特產名店</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[380px] overflow-y-auto pr-1">
            {FOOD_GUIDE.map((food, i) => (
              <div
                key={i}
                className="bg-[#F8F5F2] p-4.5 rounded-xl border border-[#E9E5D9] flex flex-col justify-between hover:border-[#B28E63]/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-[#4A4A48]">{food.name}</span>
                    <span className="px-2 py-0.5 text-3xs font-bold text-[#B28E63] bg-[#B28E63]/10 border border-[#B28E63]/25 rounded-md">
                      {food.type}
                    </span>
                  </div>
                  <span className="text-3xs text-[#8A8A7C] block mb-2">📍 區域：{food.area}</span>
                  <p className="text-2xs text-[#4A4A48]/85 leading-relaxed">{food.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supermarket Wiki */}
        <div className="bg-white border border-[#E9E5D9] rounded-2xl p-5 md:p-6 shadow-lg">
          <h2 className="text-lg font-bold text-[#4A4A48] flex items-center gap-2 mb-1 font-display">
            <ShoppingBag className="w-5 h-5 text-[#6B705C]" />
            購物與藥妝、超市大盤點
          </h2>
          <p className="text-xs text-[#8A8A7C] mb-4">出國必逛！日本當地零食、水果、伴手禮補貨基地</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[320px] overflow-y-auto pr-1">
            {SUPERMARKETS.map((shop, i) => (
              <div
                key={i}
                className="bg-[#F8F5F2] p-4.5 rounded-xl border border-[#E9E5D9] hover:border-[#6B705C]/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-[#4A4A48]">{shop.name}</span>
                  <span className="px-2 py-0.5 text-3xs font-bold text-[#6B705C] bg-[#6B705C]/10 border border-[#6B705C]/25 rounded-md">
                    {shop.area}
                  </span>
                </div>
                <span className="text-3xs text-[#8A8A7C] block mb-2">📍 地址/位置：{shop.location}</span>
                <p className="text-2xs text-[#4A4A48]/85 leading-relaxed">{shop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
