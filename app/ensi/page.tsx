// app/ensi/page.js
export default function EnsiPage({ searchParams }) {
    const userId = searchParams.userId;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Ensi'ye Hoş Geldiniz</h1>
                {userId && <p className="text-xl mb-4">Kullanıcı ID: {userId}</p>}
                <p className="text-lg">Bu bağlantı Ensi Home mobil uygulaması daveti içindir.</p>
            </div>
        </div>
    );
}
