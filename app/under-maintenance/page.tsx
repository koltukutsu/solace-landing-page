import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logoImage from "@/public/images/logo/main_logo.svg";
import logoImageOnlyS from "@/public/images/logo/only_s.svg";

export const metadata: Metadata = {
  title: "Solace | Sitemiz Kısa Bir Mola Veriyor",
  description: "Web sitemiz şu anda bakımda. Kısa süre içinde yeniden aktif hale geleceğiz.",
};

const UnderMaintenancePage = () => {
  const t = useTranslations();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#F2F2F7] to-[#E5E5EA] px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-xl text-center w-full max-w-md transition-all duration-300 hover:shadow-lg">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#007AFF]/10 to-[#007AFF]/5"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-[#007AFF]/10 to-[#007AFF]/5"></div>
        
        <div className="relative flex justify-center mb-8">
          <div className="relative">
            <Image 
              src={logoImage.src} 
              alt="Solace Logo" 
              width={180} 
              height={60} 
              className="h-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
        
        <h1 className="mb-4 text-2xl sm:text-3xl font-semibold text-[#1C1C1E] tracking-tight">{t('underMaintenance_title')}</h1>
        <div className="mb-8 h-1 w-20 bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] mx-auto rounded-full"></div>
{/*         
        <div className="flex justify-center mb-10">
          <Image 
            src={logoImageOnlyS.src} 
            alt="Maintenance Illustration" 
            width={40} 
            height={40}
            className="animate-pulse opacity-80 mx-auto"
            priority
          />
        </div>
         */}
        <p className="mb-8 text-base sm:text-lg leading-relaxed text-[#3A3A3C] max-w-sm mx-auto">
          {t('underMaintenance_description')}
        </p>
        
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-[#8E8E93] flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 bg-green-400 rounded-full animate-ping"></span>
            {t('underMaintenance_contact')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenancePage;