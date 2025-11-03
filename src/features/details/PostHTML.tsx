

import React from 'react'

const PostHTML: React.FC = () => {
    return (
        <>
            <article className="flex-3 mt-1 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                {/* contenido anterior del post */}

                {/* HTML externo */}
                <iframe
                    src="/introSoftLibre.html" // si está en public/
                    style={{ width: "100%", height: "600px", border: "none" }}
                    title="HTML externo"
                />
            </article>
        </>
    )
}

export default PostHTML