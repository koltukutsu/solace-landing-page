import { HoverEffect } from "../New-Main-Base/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Merkezi Kontrol",
    description:
      "Ensi Home, tüm akıllı ev cihazlarını tek bir platformda entegre ederek kullanıcıların birden fazla uygulama ile uğraşma gereksinimini ortadan kaldırır.",
    link: "https://ensihome.com",
  },
  {
    title: "Yapay Zeka Destekli Yönetim",
    description:
      "Ensi Home'un yapay zeka destekli yönetim sistemi, cihazların en verimli şekilde çalışmasını sağlar ve kullanıcı müdahalesini minimize eder.",
    link: "https://ensihome.com",
  },
  {
    title: "Kişiselleştirilmiş Otomasyon",
    description:
      "Kullanıcı tercihleri ve rutinlerine dayalı kişiselleştirilmiş otomasyonlar oluşturarak yaşam alanlarını daha konforlu ve verimli hale getirir.",
    link: "https://ensihome.com",
  },
  {
    title: "Güvenli Veri Yönetimi",
    description:
      "Kullanıcı verileri şifrelenmiş ağ altyapısı ile güvenli bir şekilde yönetilir, böylece veri mahremiyeti ve güvenliği sağlanır.",
    link: "https://ensihome.com",
  },
  {
    title: "Sesli Asistan Entegrasyonu",
    description:
      "Yapay zeka destekli sesli asistan ile kullanıcılar, uygulamayı açmadan kolaylıkla otomasyon ekleyebilir ve cihazları kontrol edebilir.",
    link: "https://ensihome.com",
  },
  {
    title: "Geniş Cihaz Uyumluluğu",
    description:
      "Ensi Home, Ethernet, Wi-Fi, Zigbee, Bluetooth ve Z-Wave gibi birçok IoT haberleşme protokolünü destekleyerek geniş cihaz uyumluluğu sunar.",
    link: "https://ensihome.com",
  },
];
