import React from 'react'

// Process of destructuring thr props
// Rendering information with loop
export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
