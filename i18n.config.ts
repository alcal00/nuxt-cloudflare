export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            home: 'home',
            welcome: 'Welcome',
            welcome_phrase: "This is the place where to start your paxpar journey.",
            company: "Company",
            pricing: "Pricing",
            subscribe_msg: "Subscribe to keep in touch",
            subscribe_ok: "You've been subscribed.",
            subscribe_ko: "Subscription failed",
            subscribe: "Subscribe",
            subscribing: "Subscribing",
            subscribed: "Subscribed",
            enter_email: "Enter your email",
        },
        fr: {
            home: 'accueil',
            welcome: 'Bienvenue',
            welcome_phrase: "L'endroit où démarrer votre aventure paxpar.",
            company: "Société",
            pricing: "Tarif",
        },
        pt: {
            home: 'casa',
            welcome: 'Bem-vindo',
            welcome_phrase: "Este é o lugar onde você pode começar sua jornada com a paxpar.",
            company: "Empresa",
        },
    }
}))
