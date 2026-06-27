import { Location, TimetableRow } from './types';

export const LOCATIONS: Location[] = [
  {
    id: 'hotel_roi',
    name: 'Hotel ROI 博多',
    jpName: 'ホテル ROI 博多',
    type: 'hotel',
    area: '博多',
    address: '福岡市博多區博多站前 4 丁目 6-13',
    phone: '092-409-4892',
    coordinates: { lat: 33.585542, lng: 130.418042 },
    description: '福岡市博多區的便利舒適旅館，距離博多車站步行僅約 6～8 分鐘。是探索福岡與九州各地的最佳大本營。',
    transport: [
      '從 JR 博多站「博多口（博多駅博多口）」出站。',
      '朝「KITTE 博多／博多阪急」方向走到博多站前大馬路。',
      '沿著「住吉通（住吉通り）」往南直走。',
      '經過「西日本 City 銀行」及幾個路口後，看到博多站前 4 丁目區域。',
      '抵達飯店。'
    ],
    details: [
      '地理位置絕佳，適合攜帶大型行李的旅客。',
      '步行即可抵達博多車站，轉乘新幹線、特急列車、地鐵都極為便利。',
      '周邊有許多便利商店與美食餐廳（如一蘭拉麵、LOPIA 超市）。'
    ],
    tips: [
      '抵達博多車站後，建議先在一樓大廳的『JR 綠色窗口』購買或兌換「九州 JR PASS 三日券」，這將是後續前往小倉、門司港等地的交通神器。'
    ]
  },
  {
    id: 'sumiyoshi_shrine',
    name: '住吉神社',
    jpName: '住吉神社',
    type: 'attraction',
    area: '博多',
    address: '福岡市博多區住吉 3-1-51',
    coordinates: { lat: 33.585149, lng: 130.413725 },
    description: '這是日本全國 2129 座住吉神社中最古老的神社。民眾紛紛來此參拜除惡開運之神，以求淨化身心、抵擋災禍。',
    transport: [
      '從 Hotel ROI 博多沿著住吉通往西步行約 5 分鐘即可抵達。',
      '或從博多車站博多口步行約 10 分鐘。'
    ],
    details: [
      '鎮守在神社內的「惠比壽神」是非常受歡迎的能量景點！據說觸摸惠比壽神身體的不同部位有不同的功用：摸肚子能除病痛、摸手臂能提升技能。',
      '神社內擁有號稱「西日本第一」的能劇舞台，除了傳統能劇之外，也經常舉辦各類現場音樂與文化演出。'
    ],
    tips: [
      '參拜時別忘了摸摸惠比壽神像，為自己和家人祈求健康與智慧！'
    ]
  },
  {
    id: 'canal_city',
    name: '博多運河城',
    jpName: 'キャナルシティ博多',
    type: 'shopping',
    area: '博多',
    address: '福岡市博多區住吉 1-2',
    coordinates: { lat: 33.589838, lng: 130.410714 },
    description: '環繞著運河建設的巨大綜合性商業設施，包含了酒店、劇場、電影院、商場、飯店及專賣店。',
    transport: [
      '從博多車站或住吉神社步行約 10-15 分鐘。',
      '搭乘地鐵至「櫛田神社前站」步行約 3 分鐘，或「中洲川端站」步行約 7 分鐘。'
    ],
    details: [
      '每天都會舉行精彩的運河噴水秀（Music Fountain Show），結合音樂與燈光，夜間更有 3D 光雕投影秀。',
      '設有「拉麵競技場（Ramen Stadium）」，齊聚日本各地著名的拉麵店。',
      'B1 設有非常受歡迎的「一蘭拉麵」分店，裝潢充滿特色。'
    ],
    openingHours: '10:00 - 21:00 (商場), 11:00 - 23:00 (餐廳)',
    tips: [
      '每半小時就有一場噴水秀，建議晚上來觀看，搭配點燈非常浪漫！'
    ]
  },
  {
    id: 'kushida_shrine',
    name: '櫛田神社',
    jpName: '櫛田神社',
    type: 'attraction',
    area: '博多',
    address: '福岡市博多區上川端町 1-41',
    phone: '092-291-2951',
    coordinates: { lat: 33.593012, lng: 130.410631 },
    description: '櫛田神社為博多總鎮守，深受市民愛戴，被親切地暱稱為「櫛田家」。是博多夏季盛事「博多祇園山笠」的中心。',
    transport: [
      '從地鐵「櫛田神社前站」步行 1 分鐘。',
      '從地鐵「中洲川端站」步行約 5 分鐘。'
    ],
    details: [
      '創立於天平寶字元年（757年），據傳是伊勢松坂櫛田神社的分社。天正 15 (1587) 年，豐臣秀吉復興博多之際，曾捐獻協助建立目前的社殿。',
      '每年 7 月 1 日～15 日舉辦全國聞名的「博多祇園山笠」祭典，神社會展示巨大的「飾山笠」（裝飾神轎），高達十幾公尺，非常壯觀。'
    ],
    openingHours: '04:00 - 22:00',
    tips: [
      '即使不是在 7 月祭典期間，社殿旁也常年展示著一座巨大的飾山笠，非常值得拍照留念！'
    ]
  },
  {
    id: 'kawabata_street',
    name: '博多川端商店街',
    jpName: '川端通商店街',
    type: 'shopping',
    area: '博多',
    address: '福岡市博多區上川端町',
    coordinates: { lat: 33.594532, lng: 130.409545 },
    description: '這裡是博多歷史最悠久的商店街。在 400 公尺長的拱廊街裡，約有 130 家店鋪鱗次櫛比。',
    transport: [
      '地鐵「中洲川端站」5 號出口直接連結商店街入口。',
      '從櫛田神社步行 1 分鐘即達另一端入口。'
    ],
    details: [
      '販售博多人偶、博多織、山笠商品等特色名產禮品店，也有玄界灘海鮮店及多家人氣拉麵店。',
      '「川端紅豆湯廣場」在週五、週六、週日以及舉行活動時，會販售名產「川端年糕紅豆湯」，甜而不膩。',
      '街內有一家超佛心的博多拉麵店「はかたや」，一碗拉麵只要 290 日圓，CP 值高到破表！'
    ],
    openingHours: '各店家不同，大多為 10:00 - 19:00',
    tips: [
      '川端年糕紅豆湯通常在傍晚 5 點就會售完，建議早點去！另外別錯過 290 日圓的「はかたや」拉麵和創業 46 年的「川端どさんこ」拉麵。'
    ]
  },
  {
    id: 'ohori_garden',
    name: '大濠公園日本庭園',
    jpName: '大濠公園日本庭園',
    type: 'attraction',
    area: '大濠公園',
    address: '福岡市中央區大濠公園 1-7',
    coordinates: { lat: 33.583212, lng: 130.376342 },
    description: '鄰接大濠公園的日本庭園，由日本傳統庭園技術與現代元素完美融合的「築山林泉迴遊式」庭園。',
    transport: [
      '搭乘福岡地鐵機場線至「大濠公園站」（K05），步行約 8-10 分鐘。',
      '或搭乘西鐵巴士至「黑門」或「大濠公園」站下車步行約 5 分鐘。'
    ],
    details: [
      '園內配置有大池和假山的大池泉庭園、曲水的流動、枯山水庭園，以及茶室構造的茶室和露地庭園等。',
      '順著聯繫庭園的通道可以在裡頭周遊，觀賞四季變幻：夏天的深綠、秋天的紅葉、冬天的松綠與春天的櫻花。'
    ],
    openingHours: '09:00 - 17:00 (每週一公休)',
    tickets: '成人 250 日圓 / 兒童 120 日圓',
    tips: [
      '庭園內氣氛幽靜，與外面熱鬧的大濠公園湖畔形成對比，是放鬆心情、體驗日式禪意美學的最佳地點。'
    ]
  },
  {
    id: 'fukuoka_castle',
    name: '福岡城跡（舞鶴公園）',
    jpName: '福岡城跡',
    type: 'attraction',
    area: '大濠公園',
    address: '福岡市中央區城內',
    coordinates: { lat: 33.586612, lng: 130.383124 },
    description: '初代福岡藩主黑田長政自 1601 年起，歷時 7 年建造的宏偉城堡。因其形態如舞鶴展翅，別名也稱「舞鶴城」。',
    transport: [
      '地鐵機場線「大濠公園站」或「赤坂站」步行約 8 分鐘。'
    ],
    details: [
      '平山城結構，曾建有大、中、小天守閣和約 50 座城樓。',
      '目前保存下來的有重要文化財「多聞櫓」，以及(傳)潮見櫓、大手門、下之橋御門、祈念櫓等。',
      '護城河內有福岡縣指定的天然紀念物「野生莎草（C. Ohwii Kuekenth）」，城內也有萬葉歌碑。'
    ],
    openingHours: '全天開放 (展望台有時間限制)',
    tips: [
      '如今來到福岡城跡，雖然只能看到天守台的石基座，但爬上基座展望台可以俯瞰整個大濠公園和福岡市區，視野極佳！這裡也是著名的賞櫻勝地。'
    ]
  },
  {
    id: 'korokan_museum',
    name: '鴻臚館跡展示館',
    jpName: '鴻臚館跡展示館',
    type: 'attraction',
    area: '大濠公園',
    address: '福岡市中央區城內 1 (舞鶴公園內)',
    coordinates: { lat: 33.587812, lng: 130.381325 },
    description: '「鴻臚館」是日本平安時代所建的外交迎賓館，專門接待遣唐使、新羅使節團和客商。',
    transport: [
      '位於福岡城跡（舞鶴公園）內，從地鐵「大濠公園站」或「赤坂站」步行約 8-10 分鐘。'
    ],
    details: [
      '當時在平安京（京都）、難波（大阪）、筑紫（福岡）三處設有迎賓館，而福岡的「鴻臚館」是唯一能確認確切遗址地點的地點。',
      '從西元 7 世紀後半到 11 世紀的約 400 年間運作。展示館直接蓋在發掘現場之上，展示了發掘出的建築遺跡、大陸外交史料以及瓷器等交易品。'
    ],
    openingHours: '09:00 - 17:00 (12/29-1/3 公休)',
    tickets: '免費參觀',
    tips: [
      '館內可以直接看到考古發掘的柱子坑和壕溝，對於喜愛日本歷史、中日韓文化交流史的旅客是必去之處！'
    ]
  },
  {
    id: 'tetsudo_shrine',
    name: '鐵道神社（JR 博多城頂樓）',
    jpName: '鉄道神社 (JR博多シティ)',
    type: 'attraction',
    area: '博多',
    address: '福岡市博多區博多站中央街 1-1 (JR 博多城頂樓燕林廣場)',
    coordinates: { lat: 33.589801, lng: 130.420801 },
    description: '設立於 JR 博多城百貨頂樓「燕林廣場」的獨特神社，是西日本唯一的鐵道神社。',
    transport: [
      'JR 博多站直接搭電梯至 JR 博多城（AMU PLAZA）頂樓 RF 燕林廣場。'
    ],
    details: [
      '神社神靈是由福岡著名的住吉神社分靈而來，保佑旅途平安。',
      '神社前設有可愛的「七福童子」雕塑，代表著九州的七個縣。他們在九州地圖上牽著繩子玩火車遊戲。',
      '頂樓平台視野遼闊，還有迷你火車、小市集，是非常受家庭和鐵道迷歡迎的休憩場所。'
    ],
    openingHours: '10:00 - 22:00',
    tickets: '免費參觀',
    tips: [
      '許多旅客會在搭乘新幹線或展開九州鐵道之旅前，特地來到頂樓參拜，求一個「旅行安全」的御守！'
    ]
  },
  {
    id: 'popondetta',
    name: 'Popondetta 鐵道模型店（JR 博多城 8F）',
    jpName: 'ポポンデッタ (JR博多シティ店)',
    type: 'shopping',
    area: '博多',
    address: '福岡市博多區博多站中央街 1-1 (JR 博多城 8 樓)',
    coordinates: { lat: 33.589701, lng: 130.420701 },
    description: '以鐵道模型與鐵道文化為賣點的專業精品店，擁有種類齊全的電車模型及周邊產品。',
    transport: [
      'JR 博多站直結，搭電梯或手扶梯至 JR 博多城 8 樓。'
    ],
    details: [
      '最受歡迎的特點是店內設有大型的「立體鐵道模型場景」（全景運行軌道），猶如迴轉壽司吧一樣！',
      '共有 8 條軌道，可供 8 人同時付費租借軌道玩火車。',
      '玩家可以使用店內提供的電車模型，也可以攜帶自己的「私貨」火車模型，當一回真正的「鐵道員」！'
    ],
    openingHours: '10:00 - 20:00',
    tips: [
      '即使不自己開火車，站在旁邊看各種精細的九州列車（如由布院之森、音速號、燕子號）在微縮日本場景中奔馳，也極具療癒感。'
    ]
  },
  {
    id: 'red_brick',
    name: '赤煉瓦文化館（福岡市文學館）',
    jpName: '赤煉瓦文化館',
    type: 'attraction',
    area: '天神',
    address: '福岡市中央區天神 1-15-30',
    coordinates: { lat: 33.592754, lng: 130.402742 },
    description: '由明治時代日本代表性建築師辰野金吾（東京車站設計者）與片岡安設計，於 1909 年竣工的國家重要文化財。',
    transport: [
      '地鐵機場線「天神站」步行約 3-5 分鐘。'
    ],
    details: [
      '原為日本生命保險株式會社九州分店，紅磚與白色花崗岩交織的外牆展現了 19 世紀末的英式風格。',
      '雖然體量小巧，但建有尖塔和精緻的圓頂，細部裝飾非常典雅。',
      '一樓部分區域目前作為「福岡市文學館」使用，收集並提供文學相關的各種資訊。'
    ],
    openingHours: '09:00 - 21:00 (每週一及12/28-1/4公休)',
    tickets: '免費參觀',
    tips: [
      '外觀紅白色調非常上鏡，是天神地區最著名的西式歷史建築。拍照效果絕佳！'
    ]
  },
  {
    id: 'kego_shrine',
    name: '警固神社',
    jpName: '警固神社',
    type: 'attraction',
    area: '天神',
    address: '福岡市中央區天神 2-2-20',
    coordinates: { lat: 33.589531, lng: 130.399245 },
    description: '坐落在天神最繁華中心地帶的神社，自古以來供奉著去病消災、除惡開運的神明。',
    transport: [
      '西鐵「福岡（天神）站」步行約 2 分鐘，緊鄰三越百貨。',
      '地鐵機場線「天神站」步行約 5 分鐘。'
    ],
    details: [
      '雖然周圍滿是百貨公司與辦公大樓，但神社內卻保留了一片寧靜。',
      '擁有非常罕見的「笑狐石像」，據說摸一下能保佑生意興隆。',
      '神社內設有天然足部溫泉（足湯），供購物的遊客歇腳，還有流淌著神水的龍形水龍頭。',
      '相鄰的警固公園是市民最喜愛的休憩和約會場所，冬天會有美麗的聖誕燈飾。'
    ],
    openingHours: '09:00 - 17:00 (社務所)',
    tips: [
      '在天神逛街累了，可以花 100 日圓隨喜奉獻，享受神社內的溫馨足湯（提供擦腳毛巾），瞬間消除雙腳疲勞！'
    ]
  },
  {
    id: 'suikyo_temmangu',
    name: '水鏡天滿宮',
    jpName: '水鏡天満宮',
    type: 'attraction',
    area: '天神',
    address: '福岡市中央區天神 1-15-14',
    coordinates: { lat: 33.592124, lng: 130.402014 },
    description: '隱蔽在鱗次櫛比辦公大樓之中的幽靜神社，是九州最大繁華街「天神」之地名的由來。',
    transport: [
      '從地鐵機場線「天神站」步行約 3 分鐘（鄰近赤煉瓦文化館）。'
    ],
    details: [
      '供奉著被譽為學問之神的菅原道真。',
      '相傳菅原道真被降職到太宰府途中，曾在河面上映照過自己憔悴的面容，因此得名「水鏡」。',
      '江戶時代初期，第一代福岡藩主黑田長政將原本位於今泉的神社移到了相當於福岡城鬼門的現址，作為東方的鎮守神。'
    ],
    openingHours: '全天開放',
    tips: [
      '神社門口由一整排紅色鳥居和高大樹木圍繞，走進去彷彿與外界喧囂的天神鬧區隔絕，是鬧中取靜的秘境。'
    ]
  },
  {
    id: 'hyoutan_sushi',
    name: 'ひょうたんの回転寿司（葫蘆迴轉壽司）',
    jpName: 'ひょうたん寿司',
    type: 'food',
    area: '天神',
    address: '福岡市中央區天神 2-11-3 (SOLARIA STAGE B2F)',
    coordinates: { lat: 33.590054, lng: 130.399512 },
    description: '天神地區最著名的排隊排到天荒地老的人氣平價迴轉壽司店，提供極高 CP 值的美味壽司。',
    transport: [
      '西鐵「福岡（天神）站」旁，SOLARIA STAGE 地下 2 樓。',
      '地鐵天神站直結，經地下街步行約 3 分鐘。'
    ],
    details: [
      '由經驗豐富的老道師傅親手捏製，以福岡近海的新鮮海產為中心，每日提供約 50 種不同的食材。',
      '除了經典壽司，還有高人氣的名物「佐賀牛排卷（¥500）」和「外帶壽司（¥330 起）」。'
    ],
    openingHours: '11:00 - 21:30',
    tips: [
      '因為極受歡迎，幾乎隨時都在排隊。建議在上午 11 點開門前 20-30 分鐘去排第一輪，或者選擇下午 3:00 - 4:30 的非尖峰時段前來。'
    ]
  },
  {
    id: 'kokura_castle',
    name: '小倉城',
    jpName: '小倉城',
    type: 'attraction',
    area: '門司港・小倉',
    address: '福岡縣北九州市小倉北區城內 2-1',
    coordinates: { lat: 33.884145, lng: 130.874124 },
    description: '位於北九州市小倉的著名古城，由細川忠興於 1602 年建造。擁有獨特的「唐建式」天守閣。',
    transport: [
      '搭乘 JR 特急 Sonic 號從「博多站」出發至「小倉站」（約 40-50 分鐘）。',
      '從小倉站步行約 10 分鐘即達小倉城與相鄰的八坂神社。'
    ],
    details: [
      '天守閣外觀是四重五層，且第五層比第四層還要大，沒有檐頭（名為唐造樣式），在日本極為罕見。',
      '城堡周圍建有護城河，相鄰的八坂神社也是歷史悠久的祈福之地。'
    ],
    openingHours: '09:00 - 20:00 (4月-10月), 09:00 - 19:00 (11月-3月)',
    tickets: '天守閣門票：成人 350 日圓 / 國高中生 200 日圓 / 小學生 100 日圓',
    tips: [
      '使用「九州 JR PASS 三日券」搭乘 Sonic 特急（音速號）是完全免費劃位的，但請記得不能乘坐博多往小倉方向的山陽新幹線（因為山陽新幹線屬於 JR 西日本管轄，不適用 JR 九州 PASS）。'
    ]
  },
  {
    id: 'mojiko_retro',
    name: '門司港懷舊區',
    jpName: '門司港レトロ',
    type: 'attraction',
    area: '門司港・小倉',
    address: '福岡縣北九州市門司區港町',
    coordinates: { lat: 33.944214, lng: 130.963412 },
    description: '保存了許多明治至大正時期洋式建築的歷史港口區域，充滿了大正浪漫的異國情調。',
    transport: [
      '從「小倉站」搭乘 JR 鹿兒島本線普通車至終點「門司港站」（約 15 分鐘）。',
      '門司港站本身就是一座建於 1914 年、充滿文藝復興風格的國家重要文化財。'
    ],
    details: [
      '**0 哩紀念碑 (0哩記念碑)**：位於門司港車站月台旁，是九州鐵道的起點起點標示。',
      '**門司港懷舊展望室**：由著名建築師黑川紀章設計的高層大樓頂樓（31F），營業時間 10:00-21:30，門票成人 ¥300。俯瞰關門海峽夜景極美。',
      '**藍翼門司 (Blue Wing Moji)**：日本唯一的行人專用活動吊橋。每天固定時間伴隨音樂開啟（船隻通過時）與關閉，是情侶約會聖地。',
      '**舊門司海關**：建於 1912 年的赤煉瓦紅磚建築，免費參觀（09:00-17:00）。',
      '**海峽廣場八音盒博物館**：收集了許多精美音樂盒，免費參觀（10:00-20:00）。',
      '**九州鐵道紀念館**：展示眾多實體退役蒸汽火車與電車，成人 ¥300 / 兒童 ¥150。'
    ],
    openingHours: '各場館不同，街區全天開放',
    tips: [
      '來門司港必吃美食是「燒咖哩（Baked Curry）」，這是一種在日式咖哩飯上撒上起司和雞蛋並焗烤的特色料理。推薦名店有：門司港茶寮、BEAR FRUIT、Princess Phi Phi (プリンセスピピ)。'
    ]
  },
  {
    id: 'karato_market',
    name: '唐戶市場',
    jpName: '唐戸市場',
    type: 'food',
    area: '門司港・小倉',
    address: '山口縣下關市唐戶町 5-50',
    coordinates: { lat: 33.957712, lng: 130.947545 },
    description: '位於本州山口縣下關市的著名海鮮市場，以河豚與周末「活跳跳馬關街」壽司市集聞名。',
    transport: [
      '從門司港懷舊區的「門司港棧橋」搭乘關門聯絡船（渡輪）至對岸的「唐戶棧橋」（只需 5 分鐘，單程約 400 日圓）。',
      '下船後沿著海岸步道步行 1 分鐘即達。'
    ],
    details: [
      '每逢週五、週六、週日及國定假日，市場一樓會變身為「活跳跳馬關街（活きいき馬関街）」，數十家海鮮攤位現場捏製各種新鮮握壽司（如大腹肉、海膽、河豚），價格極便宜！',
      '下關是日本著名的「河豚之鄉」，在市場可以吃到安全的河豚生魚片（刺身）、河豚味噌湯和炸河豚。'
    ],
    openingHours: '週五/週六 10:00-15:00, 週日/假日 08:00-15:00 (平日主要為批發，不建議觀光)',
    tips: [
      '買好美味的壽司和河豚湯後，推薦帶到市場外的關門海峽草坪上，吹著海風一邊看大船通過一邊享用，這才是最道地的吃法！'
    ]
  },
  {
    id: 'uminonakamichi',
    name: '海之中道海洋世界（水族館）',
    jpName: 'マリンワールド海の中道',
    type: 'attraction',
    area: '海之中道',
    address: '福岡市東區大字西戶崎 18-28',
    coordinates: { lat: 33.662214, lng: 130.364412 },
    description: '以「對馬暖流」為主題展示海洋生物的現代化大型水族館。其外觀呈貝殼造型，非常亮眼。',
    transport: [
      '從「博多站」搭乘 JR 鹿兒島本線（上行）至「香椎站」（約 11 分鐘）。',
      '在香椎站轉乘 JR 香椎線（往西戶崎方向），搭到「海之中道站」（約 20 分鐘）。下車後步行 5 分鐘。',
      '（全程約 31 分鐘，交通非常簡便，車站發音為 KASHI / かしい）'
    ],
    details: [
      '擁有巨大的「外洋大水槽」，深 7 公尺，重現對馬暖流的深海生態，能看到巨型鯊魚和上萬隻沙丁魚風暴。',
      '擁有全日本首屈一指的「海豚海獅表演秀」，表演舞台背後就是博多灣，視覺效果無邊際。',
      '設有可愛的怪獸島、企鵝池以及近距離接觸海獸的區域。'
    ],
    openingHours: '09:30 - 17:30 (因季節微調，暑假會開放夜間水族館)',
    tickets: '成人 2,500 日圓 / 國中小學生 1,100 日圓 / 幼兒 700 日圓',
    tips: [
      '轉乘時請特別注意班次時間，香椎線的部分時段班次較稀疏。詳細的博多與香椎出發時刻表可參閱交通工具指南。'
    ]
  },
  {
    id: 'dazaifu_tenmangu',
    name: '太宰府天滿宮',
    jpName: '太宰府天満宮',
    type: 'attraction',
    area: '太宰府・柳川',
    address: '福岡縣太宰府市宰府 4-7-1',
    coordinates: { lat: 33.521512, lng: 130.534812 },
    description: '祭祀學問之神菅原道真的全國天滿宮總本社。是祈求學業進步、考試順利的首要聖地。',
    transport: [
      '**方式一（最直達）**：在博多巴士總站 1F 11 號乘車處，搭乘西鐵巴士太宰府線「旅人」直達巴士（約 40 分鐘，單程 600 日圓）。',
      '**方式二**：搭地鐵到「天神站」，至「西鐵福岡（天神）站」搭乘西鐵電車天神大牟田線至「西鐵二日市站」，再轉乘西鐵太宰府線至「太宰府站」（約 50 分鐘，共 590 日圓）。'
    ],
    details: [
      '**神牛石像**：據說觸摸神牛的頭與角可以長智慧、保平安健康。',
      '**梅枝餅 (梅ヶ枝餅)**：太宰府最具代表性的名物。這是一種外皮烤得微焦、包著香甜紅豆餡的日式麻糬餅。推薦雜誌推薦名店「中村屋」（一個約 105 日圓）。',
      '周邊有光明禪寺（賞楓名所）及九州國立博物館，值得一併參觀。'
    ],
    openingHours: '06:00 (春分至秋分前一日) / 06:30 (其他日子) 開門。閉門時間為 19:00 (9月-5月) / 20:00 (6/1-8/31)。寶物殿：09:00 - 16:30。',
    tips: [
      '太宰府參道上有非常著名的「隈研吾設計星巴克」，以交錯的木條卡榫裝飾，是網美拍照的打卡勝地！'
    ]
  },
  {
    id: 'yanagawa_cruise',
    name: '柳川遊船與立花邸御花',
    jpName: '柳川川下り・御花',
    type: 'attraction',
    area: '太宰府・柳川',
    address: '福岡縣柳川市新外町 1 (立花氏庭園 御花)',
    coordinates: { lat: 33.158524, lng: 130.401412 },
    description: '福岡南部的「水鄉」柳川，搭乘傳統 Donko 船在縱橫交錯的水道中悠閒穿梭。終點可參觀柳川藩主立花氏的別墅「御花」。',
    transport: [
      '從西鐵「天神站」搭乘西鐵天神大牟田線特急電車至「西鐵柳川站」（約 49 分鐘）。',
      '下車後即可在車站旁租用遊船，或搭乘接駁巴士前往乘船點。'
    ],
    details: [
      '**柳川遊船**：由戴著草帽、吟唱民謠的船伕掌舵，悠然行進於綠柳陰、紅磚倉庫和石橋之下。',
      '**遊船路線**：分為「通常搖船遊覽」（約 60-70 分鐘，費用約 1800~2200 日圓）及「短距離周遊路線」（30-40 分鐘，費用 1000~2000 日圓）。',
      '**立花氏庭園「御花」**：柳川藩主立花家的宅邸，其中日式庭園「松濤園」氣派非凡。開放時間 10:00-16:00，門票 ¥1200。',
      '**三柱神社**：祭祀立花宗茂等人，被稱為「西國第一強者」，距離西鐵柳川站步行 5 分鐘。'
    ],
    openingHours: '遊船 09:00 - 17:00; 御花 10:00 - 16:00',
    tips: [
      '柳川必吃美食是「鰻魚蒸籠飯（せいろ蒸し）」，這是一種將醬汁烤鰻魚鋪在調味米飯上，放入竹蒸籠中蒸製的美味。推薦三家排隊老字號：元祖本吉屋（創業三百餘年）、若松屋、民藝茶屋「六騎」（CP值高，位於御花附近）。'
    ]
  }
];

// 博多 to 小倉 to 門司港時刻表 (Outbound)
export const SOINC_TIMETABLE_OUTBOUND: TimetableRow[] = [
  { trainNo: 'Sonic 5號', departure: '08:08', stationTimes: { hakata: '08:08', kokura_arr: '09:25', kokura_dep: '09:26', mojiko: '09:40' } },
  { trainNo: 'Sonic 7號', departure: '08:20', stationTimes: { hakata: '08:20', kokura_arr: '09:14', kokura_dep: '-', mojiko: '-' } },
  { trainNo: 'Sonic 9號', departure: '08:35', stationTimes: { hakata: '08:35', kokura_arr: '09:56', kokura_dep: '09:57', mojiko: '10:10' } },
  { trainNo: 'Sonic 11號', departure: '08:49', stationTimes: { hakata: '08:49', kokura_arr: '10:00', kokura_dep: '10:02', mojiko: '10:15' } },
  { trainNo: 'Sonic 13號', departure: '09:00', stationTimes: { hakata: '09:00', kokura_arr: '09:43', kokura_dep: '-', mojiko: '-' } },
  { trainNo: 'Sonic 15號', departure: '09:03', stationTimes: { hakata: '09:03', kokura_arr: '10:38', kokura_dep: '10:41', mojiko: '10:55' } },
  { trainNo: 'Sonic 17號', departure: '09:21', stationTimes: { hakata: '09:21', kokura_arr: '10:10', kokura_dep: '-', mojiko: '-' } },
  { trainNo: 'Sonic 19號', departure: '09:28', stationTimes: { hakata: '09:28', kokura_arr: '10:51', kokura_dep: '10:58', mojiko: '11:13' } },
  { trainNo: 'Sonic 21號', departure: '10:00', stationTimes: { hakata: '10:00', kokura_arr: '10:41', kokura_dep: '-', mojiko: '-' } },
  { trainNo: 'Sonic 23號', departure: '10:20', stationTimes: { hakata: '10:20', kokura_arr: '11:07', kokura_dep: '-', mojiko: '-' } }
];

// 門司港 to 小倉 to 博多時刻表 (Inbound)
export const SOINC_TIMETABLE_INBOUND: TimetableRow[] = [
  { trainNo: 'Local / Sonic', departure: '15:40', stationTimes: { mojiko: '15:40', kokura_arr: '16:28', kokura_dep: '-', hakata: '-' } },
  { trainNo: 'Sonic 38號', departure: '15:59', stationTimes: { mojiko: '15:59', kokura_arr: '16:11', kokura_dep: '16:12', hakata: '17:17' } },
  { trainNo: 'Local / Sonic', departure: '16:05', stationTimes: { mojiko: '16:05', kokura_arr: '16:51', kokura_dep: '-', hakata: '-' } },
  { trainNo: 'Sonic 40號', departure: '16:42', stationTimes: { mojiko: '16:42', kokura_arr: '16:56', kokura_dep: '16:57', hakata: '18:37' } },
  { trainNo: 'Sonic 42號', departure: '16:59', stationTimes: { mojiko: '16:59', kokura_arr: '17:12', kokura_dep: '17:13', hakata: '18:21' } },
  { trainNo: 'Local / Sonic', departure: '16:40', stationTimes: { mojiko: '16:40', kokura_arr: '17:28', kokura_dep: '-', hakata: '-' } },
  { trainNo: 'Sonic 44號', departure: '17:13', stationTimes: { mojiko: '17:13', kokura_arr: '17:26', kokura_dep: '17:27', hakata: '19:02' } },
  { trainNo: 'Local / Sonic', departure: '17:05', stationTimes: { mojiko: '17:05', kokura_arr: '17:49', kokura_dep: '-', hakata: '-' } },
  { trainNo: 'Local / Sonic', departure: '17:40', stationTimes: { mojiko: '17:40', kokura_arr: '18:31', kokura_dep: '-', hakata: '-' } },
  { trainNo: 'Local / Sonic', departure: '18:05', stationTimes: { mojiko: '18:05', kokura_arr: '18:52', kokura_dep: '-', hakata: '-' } },
  { trainNo: 'Local / Sonic', departure: '18:40', stationTimes: { mojiko: '18:40', kokura_arr: '19:29', kokura_dep: '-', hakata: '-' } }
];

// 海之中道時刻表 (Outbound)
export const UMINO_TIMETABLE_OUTBOUND: TimetableRow[] = [
  { departure: '09:21', stationTimes: { hakata: '09:21', kashii_arr: '09:28', kashii_dep: '09:29', umino: '09:45' } },
  { departure: '09:28', stationTimes: { hakata: '09:28', kashii_arr: '09:39', kashii_dep: '10:10', umino: '10:25' } },
  { departure: '09:37', stationTimes: { hakata: '09:37', kashii_arr: '09:49', kashii_dep: '10:10', umino: '10:25' } },
  { departure: '09:46', stationTimes: { hakata: '09:46', kashii_arr: '09:56', kashii_dep: '10:10', umino: '10:25' } },
  { departure: '10:02', stationTimes: { hakata: '10:02', kashii_arr: '10:13', kashii_dep: '10:40', umino: '10:56' } },
  { departure: '10:09', stationTimes: { hakata: '10:09', kashii_arr: '10:20', kashii_dep: '10:40', umino: '10:56' } },
  { departure: '10:20', stationTimes: { hakata: '10:20', kashii_arr: '10:26', kashii_dep: '10:40', umino: '10:56' } },
  { departure: '10:22', stationTimes: { hakata: '10:22', kashii_arr: '10:34', kashii_dep: '11:09', umino: '11:25' } },
  { departure: '10:32', stationTimes: { hakata: '10:32', kashii_arr: '10:42', kashii_dep: '11:09', umino: '11:25' } },
  { departure: '10:40', stationTimes: { hakata: '10:40', kashii_arr: '10:53', kashii_dep: '11:09', umino: '11:25' } }
];

// 海之中道時刻表 (Inbound)
export const UMINO_TIMETABLE_INBOUND: TimetableRow[] = [
  { departure: '15:36', stationTimes: { umino: '15:36', kashii_arr: '15:51', kashii_dep: '15:50', hakata: '16:01' } },
  { departure: '16:08', stationTimes: { umino: '16:08', kashii_arr: '16:28', kashii_dep: '16:36', hakata: '16:48' } },
  { departure: '16:32', stationTimes: { umino: '16:32', kashii_arr: '16:49', kashii_dep: '16:50', hakata: '17:02' } },
  { departure: '16:54', stationTimes: { umino: '16:54', kashii_arr: '17:13', kashii_dep: '17:17', hakata: '17:34' } }
];

// 太宰府西鐵時刻表 (Outbound)
export const DAZAIFU_NISHITETSU_OUTBOUND: TimetableRow[] = [
  { departure: '09:07', stationTimes: { tenjin: '09:07', futsukaichi: '09:23', futsukaichi_dep: '-', dazaifu: '-' } },
  { departure: '09:18', stationTimes: { tenjin: '09:18', futsukaichi: '09:34', futsukaichi_dep: '-', dazaifu: '-' } },
  { departure: '09:30', stationTimes: { tenjin: '09:30', futsukaichi: '09:45', futsukaichi_dep: '-', dazaifu: '09:47' } },
  { departure: '09:37', stationTimes: { tenjin: '09:37', futsukaichi: '09:53', futsukaichi_dep: '-', dazaifu: '10:10' } },
  { departure: '09:48', stationTimes: { tenjin: '09:48', futsukaichi: '10:04', futsukaichi_dep: '-', dazaifu: '10:10' } },
  { departure: '10:18', stationTimes: { tenjin: '10:18', futsukaichi: '10:34', futsukaichi_dep: '-', dazaifu: '10:47' } },
  { departure: '10:22', stationTimes: { tenjin: '10:22', futsukaichi: '10:34', futsukaichi_dep: '10:40', dazaifu: '-' } },
  { departure: '10:32', stationTimes: { tenjin: '10:32', futsukaichi: '10:42', futsukaichi_dep: '-', dazaifu: '-' } },
  { departure: '10:40', stationTimes: { tenjin: '10:40', futsukaichi: '10:53', futsukaichi_dep: '11:09', dazaifu: '-' } },
  { departure: '10:48', stationTimes: { tenjin: '10:48', futsukaichi: '11:04', futsukaichi_dep: '-', dazaifu: '11:17' } }
];

// 太宰府專線公車時刻表 (旅人巴士 - 42分鐘 700円)
export const DAZAIFU_BUS_TIMETABLE: TimetableRow[] = [
  { trainNo: '博多→太宰府', departure: '09:12', stationTimes: { hakata: '09:12', dazaifu: '09:54' } },
  { trainNo: '博多→太宰府', departure: '09:24', stationTimes: { hakata: '09:24', dazaifu: '10:06' } },
  { trainNo: '博多→太宰府', departure: '10:12', stationTimes: { hakata: '10:12', dazaifu: '10:54' } },
  { trainNo: '博多→太宰府', departure: '10:24', stationTimes: { hakata: '10:24', dazaifu: '11:06' } },
  { trainNo: '博多→太宰府', departure: '11:12', stationTimes: { hakata: '11:12', dazaifu: '11:54' } },
  { trainNo: '博多→太宰府', departure: '11:24', stationTimes: { hakata: '11:24', dazaifu: '12:06' } },
  { trainNo: '太宰府→博多', departure: '15:02', stationTimes: { dazaifu: '15:02', hakata: '15:51' } },
  { trainNo: '太宰府→博多', departure: '16:02', stationTimes: { dazaifu: '16:02', hakata: '16:51' } },
  { trainNo: '太宰府→博多', departure: '17:17', stationTimes: { dazaifu: '17:17', hakata: '18:06' } }
];

// 柳川西鐵時刻表
export const YANAGAWA_TIMETABLE: TimetableRow[] = [
  { trainNo: '去程 特急', departure: '09:00', stationTimes: { tenjin: '09:00', yanagawa: '09:49' } },
  { trainNo: '去程 特急', departure: '09:30', stationTimes: { tenjin: '09:30', yanagawa: '10:19' } },
  { trainNo: '去程 特急', departure: '10:00', stationTimes: { tenjin: '10:00', yanagawa: '10:49' } },
  { trainNo: '去程 特急', departure: '10:30', stationTimes: { tenjin: '10:30', yanagawa: '11:19' } },
  { trainNo: '去程 特急', departure: '11:00', stationTimes: { tenjin: '11:00', yanagawa: '11:49' } },
  { trainNo: '去程 特急', departure: '11:30', stationTimes: { tenjin: '11:30', yanagawa: '12:19' } },
  { trainNo: '回程 特急', departure: '15:05', stationTimes: { yanagawa: '15:05', tenjin: '15:55' } },
  { trainNo: '回程 特急', departure: '15:35', stationTimes: { yanagawa: '15:35', tenjin: '16:25' } },
  { trainNo: '回程 特急', departure: '16:05', stationTimes: { yanagawa: '16:05', tenjin: '16:55' } },
  { trainNo: '回程 特急', departure: '16:35', stationTimes: { yanagawa: '16:35', tenjin: '17:25' } },
  { trainNo: '回程 特急', departure: '17:05', stationTimes: { yanagawa: '17:05', tenjin: '17:55' } },
  { trainNo: '回程 特急', departure: '17:35', stationTimes: { yanagawa: '17:35', tenjin: '18:25' } }
];
