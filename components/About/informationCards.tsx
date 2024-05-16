import { InformationCard } from "@/types/informationCard";
import reachImage from "@/public/images/info-cards/reach.png";
import securityImage from "@/public/images/info-cards/security-home.png";
import savingsImage from "@/public/images/info-cards/savings.png";
import lightsImage from "@/public/images/info-cards/lights.png";


const informationCardsList: InformationCard[] = [
    {
        title:"Evinize Her An Ulaşın!",
        description:"Evinize her an bağlı olun. Eviniz her an sizin kontrolünüz altında olsun.",
        image:reachImage,
    },
    {
        title:"Aklınız Evinizde Kalmasın!",
        description:"Güvenlik alarmımız ile evinizden uzakta olsanız dahi, her an evinizin güvenliğinden emin olun.",
        image:securityImage,
    },
    {
        title:"Enerji Tasarrufu Sağlayın!",
        description:"Otomasyon ve Yapay Zeka Sistemlerimiz sayesinde Enerji Tasarrufu sağlayın.",
        image:savingsImage,
    },
    {
        title:"Özel Işıklandırmalar!",
        description:"Işıklarınızı istediğiniz gibi ayarlayın. Renkleriniz sizi yansıtsın.",
        image:lightsImage,
    }
]

export default informationCardsList;