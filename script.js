tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: {
                    800: '#0a192f',
                    900: '#020c1b',
                    950: '#01060f',
                },
                gold: {
                    400: '#d4af37',
                    500: '#c5a059',
                    600: '#b8860b',
                    light: '#f9e4b7',
                }
            },
            fontFamily: {
                serif: ['Cinzel', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1577030806457-128c68884968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                'star-pattern': "radial-gradient(white 1px, transparent 1px)",
            }
        }
    }
}