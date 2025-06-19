interface DevProps {
    dev: {
        nome: string;
        bio: string;
        tecnologias: string;
        github: string;
    };
}

export const DevCard = ({ dev }: DevProps) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-4 border-l-4 border-blue-500 hover:scale-[1.01] transition">
            <h2 className="text-xl font-bold text-gray-800">{dev.nome}</h2>
            {dev.bio && (
                <p className="text-gray-600 mt-1">{dev.bio}</p>
            )}
            <p className="mt-2 text-sm text-gray-500">
                <span className="font-semibold text-black">Stack:</span> {dev.tecnologias}
            </p>
            <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
            >
                Ver GitHub →
            </a>
        </div>
    );
};
