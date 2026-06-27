import { useState } from 'react';
import {
  SOINC_TIMETABLE_OUTBOUND,
  SOINC_TIMETABLE_INBOUND,
  UMINO_TIMETABLE_OUTBOUND,
  UMINO_TIMETABLE_INBOUND,
  DAZAIFU_NISHITETSU_OUTBOUND,
  DAZAIFU_BUS_TIMETABLE,
  YANAGAWA_TIMETABLE
} from '../data';
import { Train, Bus, Info, Clock, ArrowRight, ArrowLeftRight, CreditCard } from 'lucide-react';

export default function TimetableDisplay() {
  const [activeRoute, setActiveRoute] = useState<'sonic' | 'umino' | 'dazaifu' | 'yanagawa'>('sonic');
  const [direction, setDirection] = useState<'outbound' | 'inbound'>('outbound');

  return (
    <div className="bg-white border border-[#E9E5D9] rounded-2xl p-4 md:p-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#4A4A48] flex items-center gap-2 font-display">
            <Train className="w-5.5 h-5.5 text-[#6B705C]" />
            景點交通時刻表
          </h2>
          <p className="text-xs text-[#8A8A7C] mt-1">詳細整理車次、站名、轉乘時間與車資，出門免煩惱</p>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-[#F8F5F2] p-1.5 rounded-xl border border-[#E9E5D9]">
          <button
            onClick={() => { setActiveRoute('sonic'); setDirection('outbound'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeRoute === 'sonic' ? 'bg-[#6B705C] text-white font-bold shadow-sm' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
            }`}
          >
            小倉・門司港
          </button>
          <button
            onClick={() => { setActiveRoute('umino'); setDirection('outbound'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeRoute === 'umino' ? 'bg-[#6B705C] text-white font-bold shadow-sm' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
            }`}
          >
            海之中道
          </button>
          <button
            onClick={() => { setActiveRoute('dazaifu'); setDirection('outbound'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeRoute === 'dazaifu' ? 'bg-[#6B705C] text-white font-bold shadow-sm' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
            }`}
          >
            太宰府
          </button>
          <button
            onClick={() => { setActiveRoute('yanagawa'); setDirection('outbound'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeRoute === 'yanagawa' ? 'bg-[#6B705C] text-white font-bold shadow-sm' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
            }`}
          >
            柳川
          </button>
        </div>
      </div>

      {/* Route Info Cards */}
      <div className="bg-[#F1EDE4] border border-[#E9E5D9] rounded-xl p-4 mb-5">
        <h3 className="text-sm font-bold text-[#4A4A48] mb-2 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-[#6B705C]" />
          路線與交通重點指南
        </h3>
        {activeRoute === 'sonic' && (
          <div className="text-xs text-[#4A4A48]/90 space-y-2">
            <p>
              📍 <strong>交通手段：</strong>在「博多站」搭乘 <strong>JR SONIC (音速號) 特急列車</strong> 抵達小倉，再於小倉站內轉乘 <strong>JR 鹿兒島本線普通車</strong> 抵達門司港。
            </p>
            <p>
              🎫 <strong>車資與 Pass：</strong>特急自由席單程約 2,500円（使用「九州 JR PASS」則完全免費且可免費劃位指定席）。
            </p>
            <p className="text-[#B28E63] bg-[#B28E63]/5 p-2.5 rounded border border-[#B28E63]/20 font-medium">
              ⚠️ <strong>重要提醒：</strong>持 JR 九州 PASS『不能』搭乘博多往小倉方向的新幹線！因為該段新幹線屬於 JR 西日本管轄，請務必認明搭乘特急「音速號（SONIC）」。
            </p>
          </div>
        )}
        {activeRoute === 'umino' && (
          <div className="text-xs text-[#4A4A48]/90 space-y-2">
            <p>
              📍 <strong>交通手段：</strong>從「博多站」搭乘 <strong>JR 鹿兒島本線（上行）</strong> 至「香椎站」（約11分鐘），下車在同站轉乘 <strong>JR 香椎線（往西戶崎）</strong> 抵達「海之中道站」（約20分鐘）。
            </p>
            <p>
              🗣️ <strong>月台廣播：</strong>香椎站發音為 <strong>“KASHI” (かしい)</strong>，月台標誌明晰。
            </p>
            <p>
              🎫 <strong>車資：</strong>單程 480円。使用 JR 九州 PASS 全程免費。
            </p>
          </div>
        )}
        {activeRoute === 'dazaifu' && (
          <div className="text-xs text-[#4A4A48]/90 space-y-2.5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white p-2.5 rounded border border-[#D6D0C2] shadow-2xs">
                <span className="font-semibold text-[#6B705C] block mb-1">1. 西鐵「旅人」直達巴士</span>
                <span className="text-[11px] text-[#8A8A7C] block">博多巴士總站 1F 11號搭乘</span>
                <span className="text-[11px] text-[#4A4A48] block mt-1">耗時：40分鐘 / 車資：¥600</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-[#D6D0C2] shadow-2xs">
                <span className="font-semibold text-[#6B705C] block mb-1">2. 地鐵 + 西鐵電車 (推薦)</span>
                <span className="text-[11px] text-[#8A8A7C] block">天神站轉西鐵天神大牟田線</span>
                <span className="text-[11px] text-[#4A4A48] block mt-1">耗時：50分鐘 / 車資：¥590</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-[#D6D0C2] shadow-2xs">
                <span className="font-semibold text-[#6B705C] block mb-1">3. JR + 西鐵轉乘</span>
                <span className="text-[11px] text-[#8A8A7C] block">JR 二日市站步行至西鐵二日市</span>
                <span className="text-[11px] text-[#4A4A48] block mt-1">耗時：85分鐘 / 車資：¥420</span>
              </div>
            </div>
            <p className="text-[11px] text-[#8A8A7C]">
              💡 西鐵太宰府線的部分班次為彩繪「旅人號」觀光列車，可直達太宰府，無需在二日市轉車，非常好看！
            </p>
          </div>
        )}
        {activeRoute === 'yanagawa' && (
          <div className="text-xs text-[#4A4A48]/90 space-y-2">
            <p>
              📍 <strong>交通手段：</strong>至「西鐵福岡（天神）站」搭乘 <strong>西鐵天神大牟田線（特急電車）</strong> 直達「西鐵柳川站」。
            </p>
            <p>
              ⏱️ <strong>乘車時間：</strong>搭乘特急只需 49 分鐘，非常快速舒適！
            </p>
            <p>
              🎫 <strong>車資：</strong>單程 870円（可於西鐵站購買含柳川遊船、鰻魚飯優惠的「柳川太宰府套票」更划算！）。
            </p>
          </div>
        )}
      </div>

      {/* Direction and Toggle filters */}
      {activeRoute !== 'dazaifu' && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-[#8A8A7C]">行車方向：</span>
          <div className="inline-flex bg-[#F8F5F2] p-1 rounded-lg border border-[#E9E5D9]">
            <button
              onClick={() => setDirection('outbound')}
              className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                direction === 'outbound' ? 'bg-[#E9E5D9] text-[#6B705C] font-bold border border-[#6B705C]/15' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
              }`}
            >
              {activeRoute === 'sonic' ? '去程 (博多 → 門司港)' : activeRoute === 'umino' ? '去程 (博多 → 海之中道)' : '去程 (天神 → 柳川)'}
            </button>
            <button
              onClick={() => setDirection('inbound')}
              className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                direction === 'inbound' ? 'bg-[#E9E5D9] text-[#6B705C] font-bold border border-[#6B705C]/15' : 'text-[#8A8A7C] hover:text-[#4A4A48]'
              }`}
            >
              {activeRoute === 'sonic' ? '回程 (門司港 → 博多)' : activeRoute === 'umino' ? '回程 (海之中道 → 博多)' : '回程 (柳川 → 天神)'}
            </button>
          </div>
        </div>
      )}

      {/* Timetable Table */}
      <div className="overflow-x-auto rounded-xl border border-[#E9E5D9] bg-white shadow-2xs">
        {activeRoute === 'sonic' && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F1EDE4] border-b border-[#D6D0C2] text-[11px] font-bold text-[#8A8A7C] uppercase tracking-wider">
                <th className="py-3 px-4">車次</th>
                <th className="py-3 px-4">博多出發</th>
                <th className="py-3 px-4">小倉抵達</th>
                <th className="py-3 px-4">小倉出發 (轉乘)</th>
                <th className="py-3 px-4">門司港抵達</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E5D9]/60 text-xs">
              {(direction === 'outbound' ? SOINC_TIMETABLE_OUTBOUND : SOINC_TIMETABLE_INBOUND).map((row, index) => (
                <tr key={index} className="hover:bg-[#F8F5F2] transition duration-150">
                  <td className="py-3 px-4 font-semibold text-[#6B705C]">{row.trainNo || '普通/特急'}</td>
                  <td className="py-3 px-4 text-[#4A4A48] font-mono">{direction === 'outbound' ? row.stationTimes.hakata : row.stationTimes.hakata}</td>
                  <td className="py-3 px-4 text-[#4A4A48]/90 font-mono">{row.stationTimes.kokura_arr}</td>
                  <td className="py-3 px-4 text-[#8A8A7C] font-mono">
                    {row.stationTimes.kokura_dep === '-' ? (
                      <span className="text-[#8A8A7C]/60 font-sans">不需轉乘/終點</span>
                    ) : (
                      row.stationTimes.kokura_dep
                    )}
                  </td>
                  <td className="py-3 px-4 text-[#4A4A48] font-bold font-mono">{row.stationTimes.mojiko}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeRoute === 'umino' && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F1EDE4] border-b border-[#D6D0C2] text-[11px] font-bold text-[#8A8A7C] uppercase tracking-wider">
                <th className="py-3 px-4">博多出發</th>
                <th className="py-3 px-4">香椎抵達</th>
                <th className="py-3 px-4">香椎出發 (轉乘)</th>
                <th className="py-3 px-4">海之中道抵達</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E5D9]/60 text-xs">
              {(direction === 'outbound' ? UMINO_TIMETABLE_OUTBOUND : UMINO_TIMETABLE_INBOUND).map((row, index) => (
                <tr key={index} className="hover:bg-[#F8F5F2] transition duration-150">
                  <td className="py-3 px-4 text-[#4A4A48] font-mono font-semibold">{direction === 'outbound' ? row.stationTimes.hakata : row.stationTimes.hakata}</td>
                  <td className="py-3 px-4 text-[#4A4A48]/90 font-mono">{row.stationTimes.kashii_arr}</td>
                  <td className="py-3 px-4 text-[#8A8A7C] font-mono">{row.stationTimes.kashii_dep}</td>
                  <td className="py-3 px-4 text-[#4A4A48] font-bold font-mono">{row.stationTimes.umino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeRoute === 'dazaifu' && (
          <div className="p-4 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-[#4A4A48] mb-3 flex items-center gap-1 font-display">
                <Train className="w-4 h-4 text-[#6B705C]" />
                西鐵電車時刻表 (天神 ↔ 太宰府)
              </h4>
              <div className="overflow-x-auto rounded-lg border border-[#E9E5D9] bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F1EDE4] text-[10px] text-[#8A8A7C] font-bold border-b border-[#D6D0C2]">
                      <th className="py-2 px-3">天神出發</th>
                      <th className="py-2 px-3">二日市抵達</th>
                      <th className="py-2 px-3">二日市出發 (轉乘)</th>
                      <th className="py-2 px-3">太宰府抵達</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9E5D9]/60 text-xs font-mono">
                    {DAZAIFU_NISHITETSU_OUTBOUND.map((row, i) => (
                      <tr key={i} className="hover:bg-[#F8F5F2]">
                        <td className="py-2 px-3 text-[#4A4A48]">{row.stationTimes.tenjin}</td>
                        <td className="py-2 px-3 text-[#4A4A48]/90">{row.stationTimes.futsukaichi}</td>
                        <td className="py-2 px-3 text-[#8A8A7C]">
                          {row.stationTimes.futsukaichi_dep === '-' ? (
                            <span className="text-[#6B705C] font-sans font-semibold">直達旅人號</span>
                          ) : (
                            row.stationTimes.futsukaichi_dep
                          )}
                        </td>
                        <td className="py-2 px-3 text-[#4A4A48] font-bold">
                          {row.stationTimes.dazaifu === '-' ? (
                            <span className="text-[#8A8A7C]/60 font-sans">請在此轉乘</span>
                          ) : (
                            row.stationTimes.dazaifu
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#4A4A48] mb-3 flex items-center gap-1 font-display">
                <Bus className="w-4 h-4 text-[#B28E63]" />
                西鐵巴士「旅人」時刻表 (博多 ↔ 太宰府直達)
              </h4>
              <div className="overflow-x-auto rounded-lg border border-[#E9E5D9] bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F1EDE4] text-[10px] text-[#8A8A7C] font-bold border-b border-[#D6D0C2]">
                      <th className="py-2 px-3">方向</th>
                      <th className="py-2 px-3">出發時間</th>
                      <th className="py-2 px-3">抵達時間</th>
                      <th className="py-2 px-3">票價/備註</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9E5D9]/60 text-xs">
                    {DAZAIFU_BUS_TIMETABLE.map((row, i) => (
                      <tr key={i} className="hover:bg-[#F8F5F2]">
                        <td className="py-2 px-3 font-semibold text-[#B28E63]">{row.trainNo}</td>
                        <td className="py-2 px-3 font-mono text-[#4A4A48]">{row.departure}</td>
                        <td className="py-2 px-3 font-mono text-[#4A4A48] font-bold">
                          {row.stationTimes.dazaifu || row.stationTimes.hakata}
                        </td>
                        <td className="py-2 px-3 text-[#8A8A7C]">700 日圓 / 單程約 42 分鐘</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeRoute === 'yanagawa' && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F1EDE4] border-b border-[#D6D0C2] text-[11px] font-bold text-[#8A8A7C] uppercase tracking-wider">
                <th className="py-3 px-4">車次類型</th>
                <th className="py-3 px-4">出發車站</th>
                <th className="py-3 px-4">出發時間</th>
                <th className="py-3 px-4">抵達時間</th>
                <th className="py-3 px-4">抵達車站</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E5D9]/60 text-xs">
              {YANAGAWA_TIMETABLE.map((row, index) => {
                const isOutbound = row.trainNo?.includes('去程');
                return (
                  <tr key={index} className="hover:bg-[#F8F5F2] transition duration-150">
                    <td className="py-3 px-4 font-semibold text-[#6B705C]">{row.trainNo}</td>
                    <td className="py-3 px-4 text-[#8A8A7C]">{isOutbound ? '西鐵天神' : '西鐵柳川'}</td>
                    <td className="py-3 px-4 text-[#4A4A48] font-mono">{row.departure}</td>
                    <td className="py-3 px-4 text-[#4A4A48] font-bold font-mono">
                      {isOutbound ? row.stationTimes.yanagawa : row.stationTimes.tenjin}
                    </td>
                    <td className="py-3 px-4 text-[#8A8A7C]">{isOutbound ? '西鐵柳川' : '西鐵天神'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-2xs text-[#8A8A7C] justify-end">
        <Clock className="w-3.5 h-3.5" />
        <span>時刻表僅供參考，請以當地車站即時公告資訊為準。</span>
      </div>
    </div>
  );
}
