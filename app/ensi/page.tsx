// app/ensi/page.js
export default function EnsiPage({ searchParams }) {
    const userId = searchParams.userId;
    const token = searchParams.token;
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Ensi &apos; ye Hoş Geldiniz</h1>
                {userId && <p className="text-xl mb-4">Kullanıcı ID: {userId}</p>}
                <p className="text-lg">Bu bağlantı Ensi Home mobil uygulaması daveti içindir.</p>
            </div>
        </div>
    );
}


// // app/ensi/page.js
// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function EnsiPage({ searchParams }) {
//     const router = useRouter();
//     const userId = searchParams.userId;
//     const token = searchParams.token;

//     useEffect(() => {
//         // Redirect to home page if either userId or token is missing
//         console.log("Is allowed", userId);
//         if (!userId || !token) {
//             console.log("turn back home");
//             router.push('/');
//         }
//     }, [userId, token, router]);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold mb-4">Ensi'ye Hoş Geldiniz</h1>
//                 {userId && <p className="text-xl mb-4">Kullanıcı ID: {userId}</p>}
//                 <p className="text-lg">Bu bağlantı Ensi Home mobil uygulaması daveti içindir.</p>
//             </div>
//         </div>
//     );
// }
