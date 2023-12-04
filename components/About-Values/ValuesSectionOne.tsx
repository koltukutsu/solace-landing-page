import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

const valuesList: {
  id: number;
  valueTitle: string;
  valueDescription: string;
}[] = [
  {
    id: 1,
    valueTitle: "Güvenilirlik",
    valueDescription:
      "Solace olarak, işimizi etik değerler çerçevesinde yürüterek güvenilir ve dürüst bir marka olma taahhüdümüz var. Kişisel Verilerin KVKK kapsamında her daim güvende. Şeffaflık ilkemiz gereği verilerinizi bilgi ve rızanız dışında kullanılmaz.",
  },
  {
    id: 2,
    valueTitle: "Güncel",
    valueDescription:
      "Müşterilerimizle en son gelişmekte olan akıllı cihazlar teknolojisini buluşturarak, yaşamlarını daha konforlu, verimli ve eğlenceli hale getirmeyi amaçlıyoruz.",
  },
  {
    id: 3,
    valueTitle: "İnovatif",
    valueDescription:
      "Teknolojik gelişmeleri takip ederek sürekli olarak yenilikçi çözümler sunmayı amaçlıyoruz. İnovasyon, işimizin temel taşıdır ve müşterilerimize en iyi deneyimi sunabilmek için sürekli çaba sarf ediyoruz.",
  },
  {
    id: 4,
    valueTitle: "Çevre Dostu",
    valueDescription:
      "Sürdürülebilirlik ve toplumsal sorumluluk bilinciyle hareket ediyoruz. Faaliyetlerimizi çevre dostu ve topluma fayda sağlayacak şekilde yönlendiriyoruz.",
  },
  {
    id: 5,
    valueTitle: "Müşteri Memnuniyeti",
    valueDescription:
      "Müşteri memnuniyetini önceliğimiz olarak kabul ediyoruz. Ürün ve hizmetlerimizle müşterilerimizin beklentilerini aşmayı hedefliyoruz.",
  },
  {
    id: 6,
    valueTitle: "Ekip Çalışması",
    valueDescription:
      "Başarıyı, işbirliği ve ekip çalışmasıyla elde edeceğimize inanıyoruz. Çalışanlarımız arasında saygı, adil yönetim ve açık iletişim ilkelerine dayalı bir çalışma ortamı oluşturmayı amaçlıyoruz.",
  },
];

const ValuesSectionOne = () => {
  return (
    <div className="container mb-8 px-16">
      <SectionTitle title="Değerlerimiz" paragraph="" center width="665px" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 -mt-8">
        {valuesList.map((e) => {
          return (
            <div
              className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
              key={e.id}
            >
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-center text-black dark:white">{e.valueTitle}</div>
                <p className="text-base text-gray-400 dark:text-gray-400 text-center">{e.valueDescription}</p>
              </div>
              {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ValuesSectionOne;
