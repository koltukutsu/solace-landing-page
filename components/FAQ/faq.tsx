"use client";

import { Faq } from "@/types/faq";
import { useTranslations } from "next-intl";

const t = useTranslations();

const faqList: Faq[] = [
    {
      id: "0",
      question: t("Akıllı Ev nedir?"),
      answer: t(
        "Akıllı Ev, çeşitli cihazların birbirleriyle iletişim kurabildiği, uzaktan kontrol edilebilen ve otomatikleştirilebilen bir ev sistemidir. Bu sistem sayesinde evdeki aydınlatma, ısıtma, güvenlik gibi birçok özellik kolaylıkla kontrol edilebilir."
      ),
    },
    {
      id: "1",
      question: t("Akıllı Ev'in avantajları nelerdir?"),
      answer: t(
        "Akıllı Ev, enerji tasarrufu, güvenlik artışı, konfor ve kullanım kolaylığı gibi birçok avantaj sunar. Ayrıca, cihazlar arasındaki iletişim sayesinde ev sahiplerine daha akıllı ve bağlantılı bir yaşam tarzı sunar."
      ),
    },
    {
      id: "2",
      question: t("Hangi cihazlar Akıllı Ev sistemine entegre edilebilir?"),
      answer: t(
        "Akıllı Ev sistemleri, aydınlatma, ısıtma ve soğutma sistemleri, güvenlik kameraları, kapı kilidi sistemleri, ev sinema sistemleri ve birçok ev aletini içerebilir. Genellikle Wi-Fi veya Bluetooth gibi teknolojilerle entegre edilirler."
      ),
    },
    {
      id: "3",
      question: t("Akıllı Ev sistemleri nasıl enerji tasarrufu sağlar?"),
      answer: t(
        "Akıllı Ev sistemleri, ev sahiplerine enerji kullanımını daha etkili bir şekilde yönetme imkanı tanır. Örneğin, otomatik ısıtma ve soğutma sistemleri, evdeki sensörler aracılığıyla ortamın kullanılmadığı zamanlarda enerji tasarrufu yapabilir."
      ),
    },
    {
      id: "4",
      question: t("Akıllı Ev sistemlerinin kurulumu zor mudur?"),
      answer: t(
        "Akıllı Ev sistemlerinin kurulumu genellikle karmaşık değildir ve birçok cihaz kolayca kurulabilir. Ancak, daha karmaşık sistemler için profesyonel yardım almak faydalı olabilir."
      ),
    },
    {
      id: "5",
      question: t("Akıllı Ev sistemleri güvenli midir?"),
      answer: t(
        "Akıllı Ev sistemleri, güvenlik açısından sürekli gelişmektedir. Güçlü şifreleme yöntemleri ve düzenli güncellemelerle güvenlik sağlanır. Ancak, kullanıcıların güçlü parolalar kullanması ve düzenli güncellemeler yapması önemlidir."
      ),
    },
    {
      id: "6",
      question: t("Akıllı Ev sistemleri pahalı mıdır?"),
      answer: t(
        "Akıllı Ev sistemlerinin maliyeti, seçilen cihazlar ve sistemin kapsamına bağlı olarak değişir. Temel bir sistem uygun fiyatlı olabilirken, daha karmaşık ve entegre sistemler daha pahalı olabilir."
      ),
    },
    {
      id: "7",
      question: t("Akıllı Ev sistemi ile hangi işlemler uzaktan kontrol edilebilir?"),
      answer: t(
        "Akıllı Ev sistemi ile aydınlatma, ısıtma-soğutma, güvenlik kameraları, kapı kilitleri, elektronik cihazlar ve daha birçok ev fonksiyonu uzaktan kontrol edilebilir."
      ),
    },
    {
      id: "8",
      question: t("Akıllı Ev sistemi kurulurken nelere dikkat edilmelidir?"),
      answer: t(
        "Akıllı Ev sistemi kurulurken cihazların uyumluluğuna, güvenlik ayarlarına, ağ altyapısının yeterliliğine ve kullanıcı ihtiyaçlarına dikkat edilmelidir."
      ),
    },
    {
      id: "9",
      question: t("Akıllı Ev sistemleri ile uyumlu uygulamalar nelerdir?"),
      answer: t(
        "Akıllı Ev sistemleri genellikle üreticilerin sağladığı mobil uygulamalarla uyumludur. Örneğin, Google Home, Amazon Alexa ve Apple HomeKit gibi uygulamalar yaygın olarak kullanılır."
      ),
    },
    {
      id: "10",
      question: t("Akıllı Ev sistemleri ile hangi rutinler otomatikleştirilebilir?"),
      answer: t(
        "Akıllı Ev sistemleri ile aydınlatma zamanlaması, ısıtma-soğutma programları, güvenlik sistemi devreye alma gibi birçok rutin otomatikleştirilebilir. Kullanıcılar kişisel rutinlerini oluşturabilirler."
      ),
    },
    {
      id: "11",
      question: t("Akıllı Ev sistemlerinin internet bağlantısı kesildiğinde ne olur?"),
      answer: t(
        "İnternet bağlantısı kesildiğinde, yerel ağ üzerinden çalışan akıllı cihazlar genellikle çalışmaya devam eder. Ancak, uzaktan kontrol ve bulut tabanlı hizmetler devre dışı kalabilir."
      ),
    },
    {
      id: "12",
      question: t("Akıllı Ev sistemleri çocuklar için güvenli midir?"),
      answer: t(
        "Akıllı Ev sistemleri, doğru kurulum ve ayarlarla çocuklar için güvenlidir. Ebeveyn kontrolleri ve güvenlik ayarları ile çocukların erişimi sınırlandırılabilir."
      ),
    },
    {
      id: "13",
      question: t("Akıllı Ev sistemleri yaşlılar için nasıl faydalıdır?"),
      answer: t(
        "Akıllı Ev sistemleri, yaşlılar için konfor ve güvenlik sağlar. Acil durum çağrı sistemleri, otomatik aydınlatma ve uzaktan erişim gibi özellikler yaşlıların yaşam kalitesini artırabilir."
      ),
    },
    {
      id: "14",
      question: t("Akıllı Ev sistemleri evcil hayvan sahipleri için nasıl faydalıdır?"),
      answer: t(
        "Akıllı Ev sistemleri, evcil hayvan sahiplerine büyük kolaylıklar sunar. Örneğin, evcil hayvan kameraları, otomatik mama dağıtıcıları ve akıllı kapılar sayesinde evcil hayvanların durumu kolayca takip edilebilir."
      ),
    },
  ];
  
export default faqList;
