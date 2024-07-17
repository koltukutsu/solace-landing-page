import { WhiteHoverEffect } from "../New-Main-Base/white-card-hover-effect";

export function SolaceFeatures() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <WhiteHoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Parçaların Toplamından Daha Fazlası",
    description:
      "Solace, parçaların toplamından daha fazlasını değer olarak ortaya koyar. Bütün, bireysel parçaların ötesinde bir sinerji ile değer oluşturur.",
    link: "https://ensihome.com",
  },
  {
    title: "Teknolojiyi İnsanlaştırma",
    description:
      "Solace, tasarımlarında insan odaklı olarak sade ve yalın çözümler sunar. Karmaşıklığı basitleştirir ve kullanıcı deneyimini ön planda tutar.",
    link: "https://ensihome.com",
  },
  {
    title: "Akıllı Yaşam Çözümleri",
    description:
      "Solace, yüksek teknolojiyi kullanarak akıllı ve yenilikçi yaşam çözümleri geliştirir. Teknoloji, yaşam alanlarını daha konforlu ve verimli hale getirir.",
    link: "https://ensihome.com",
  },
  {
    title: "Güvenli ve Verimli Sistemler",
    description:
      "Solace, tam donanımlı, güvenli ve verimli akıllı sistemler geliştirir. Veri gizliliği ve kullanıcı güvenliği her zaman önceliklidir.",
    link: "https://ensihome.com",
  },
];
