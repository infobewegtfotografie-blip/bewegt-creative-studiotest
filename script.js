(function(){
  const translations = {"en": {"nav.home": "Home","nav.studio": "Studio","nav.services": "Services","nav.work": "Work","nav.contact": "Contact","nav.faq": "FAQ","nav.start": "Start a Project","hero.subtitle": "Visual experiences that move people.","buttons.explore": "Explore Services","buttons.start": "Start a Project","buttons.whatsapp": "Start on WhatsApp","studio.statement": "<strong>BEWEGT CREATIVE STUDIO</strong> is an international visual production studio working between Germany, Europe and Africa — photography, film, live experiences, design and sound for people telling something true.","services.heading": "What we create","services.sub": "Each service has its own dedicated page with clear offers, use cases and project direction.","pricing.eyebrow": "Service Packages","pricing.heading": "Clear starting points, tailored production.","pricing.sub": "Indicative packages inspired by local realities in Togo, African markets, Europe and international brand standards.","pricing.local.kicker": "Local Access","pricing.local.title": "For Togo & West Africa","pricing.local.desc": "Professional entry points for individuals, churches, creators and local events.","pricing.signature.kicker": "Signature","pricing.signature.title": "Recommended BEWEGT package","pricing.signature.desc": "For serious projects needing stronger direction, cleaner production and refined post-production.","pricing.international.kicker": "International / Brand","pricing.international.title": "For Europe, diaspora & institutions","pricing.international.desc": "For premium productions, brand campaigns, NGOs, companies and full creative direction.","pricing.photo": "Photography","pricing.video": "Video","pricing.live": "Live streaming","pricing.design": "Graphic design","pricing.podcast": "Podcast","pricing.note": "Every quote depends on duration, location, crew, production level, post-production and usage rights. Local and international formulas are available on request.","pricing.cta": "Request a tailored quote","work.eyebrow": "Selected Work","work.heading": "Graphic Design Portfolio","work.sub": "Posters, creative portraits, birthday visuals and event campaigns designed for digital communication.","faq.heading": "Before we start","faq.q1": "Do you work across Europe and Africa?","faq.a1": "Yes. BEWEGT CREATIVE STUDIO is based in Germany and available for selected projects across Europe and Africa.","faq.q2": "What kind of projects do you produce?","faq.a2": "Photography, video production, documentaries, live streaming, graphic design and podcast production.","faq.q3": "How do I start a project?","faq.a3": "Send a WhatsApp message with your idea, event date, location and the type of production you need.","cta.heading": "Let’s Work<br>Together.","cta.sub": "Tell us your story. Photography, film production, live streaming, podcast production or graphic design.","footer.tagline": "Visual experiences that move people.","footer.contact": "Contact","footer.social": "Social","footer.legal": "© 2026 BEWEGT CREATIVE STUDIO. All Rights Reserved.","page.service": "Service","page.explore": "Explore more","page.share": "Share your idea, date, location and the kind of production you need.","work.design": "Design Portfolio","work.selected": "Selected design work","service.photography.title": "Photography","service.photography.tagline": "Portraits, weddings, events and visual stories with a cinematic eye.","service.photography.intro": "BEWEGT creates photography for people, brands, churches and communities who want images that feel honest, elegant and timeless.","service.photography.cta": "Start a Photography Project","service.photography.item0.title": "Portraits","service.photography.item0.desc": "A clear, professional service designed for strong visual communication.","service.photography.item1.title": "Weddings","service.photography.item1.desc": "A clear, professional service designed for strong visual communication.","service.photography.item2.title": "Events","service.photography.item2.desc": "A clear, professional service designed for strong visual communication.","service.photography.item3.title": "Churches","service.photography.item3.desc": "A clear, professional service designed for strong visual communication.","service.photography.item4.title": "Corporate Photography","service.photography.item4.desc": "A clear, professional service designed for strong visual communication.","service.photography.item5.title": "Personal Branding","service.photography.item5.desc": "A clear, professional service designed for strong visual communication.","service.video-production.title": "Video Production","service.video-production.tagline": "Films, documentaries, interviews and cinematic content for stories that matter.","service.video-production.intro": "From concept to final edit, BEWEGT produces videos with structure, emotion and a premium visual language.","service.video-production.cta": "Start a Video Project","service.video-production.item0.title": "Wedding Films","service.video-production.item0.desc": "A clear, professional service designed for strong visual communication.","service.video-production.item1.title": "Documentaries","service.video-production.item1.desc": "A clear, professional service designed for strong visual communication.","service.video-production.item2.title": "Music Videos","service.video-production.item2.desc": "A clear, professional service designed for strong visual communication.","service.video-production.item3.title": "Corporate Videos","service.video-production.item3.desc": "A clear, professional service designed for strong visual communication.","service.video-production.item4.title": "Interviews","service.video-production.item4.desc": "A clear, professional service designed for strong visual communication.","service.video-production.item5.title": "Social Media Content","service.video-production.item5.desc": "A clear, professional service designed for strong visual communication.","service.live-streaming.title": "Live Streaming","service.live-streaming.tagline": "Multi-camera streaming for churches, concerts, conferences and hybrid events.","service.live-streaming.intro": "BEWEGT supports live moments with reliable production workflows, clear sound and professional switching.","service.live-streaming.cta": "Plan a Live Stream","service.live-streaming.item0.title": "Church Live Streaming","service.live-streaming.item0.desc": "A clear, professional service designed for strong visual communication.","service.live-streaming.item1.title": "Conference Streaming","service.live-streaming.item1.desc": "A clear, professional service designed for strong visual communication.","service.live-streaming.item2.title": "Concert Streaming","service.live-streaming.item2.desc": "A clear, professional service designed for strong visual communication.","service.live-streaming.item3.title": "Hybrid Events","service.live-streaming.item3.desc": "A clear, professional service designed for strong visual communication.","service.live-streaming.item4.title": "Multi-Camera Production","service.live-streaming.item4.desc": "A clear, professional service designed for strong visual communication.","service.live-streaming.item5.title": "Broadcast Support","service.live-streaming.item5.desc": "A clear, professional service designed for strong visual communication.","service.graphic-design.title": "Graphic Design","service.graphic-design.tagline": "Posters, visual campaigns, brand identity and digital communication.","service.graphic-design.intro": "BEWEGT designs visual materials that help events, artists, ministries and brands communicate with impact.","service.graphic-design.cta": "Start a Design Project","service.graphic-design.item0.title": "Posters","service.graphic-design.item0.desc": "A clear, professional service designed for strong visual communication.","service.graphic-design.item1.title": "Birthday Designs","service.graphic-design.item1.desc": "A clear, professional service designed for strong visual communication.","service.graphic-design.item2.title": "Campaigns","service.graphic-design.item2.desc": "A clear, professional service designed for strong visual communication.","service.graphic-design.item3.title": "Brand Identity","service.graphic-design.item3.desc": "A clear, professional service designed for strong visual communication.","service.graphic-design.item4.title": "Social Media","service.graphic-design.item4.desc": "A clear, professional service designed for strong visual communication.","service.graphic-design.item5.title": "Business Materials","service.graphic-design.item5.desc": "A clear, professional service designed for strong visual communication.","service.podcast-production.title": "Podcast Production","service.podcast-production.tagline": "Recording, editing, audio identity and podcast visuals for meaningful conversations.","service.podcast-production.intro": "BEWEGT helps creators, churches, businesses and communities produce podcasts with clarity, warmth and structure.","service.podcast-production.cta": "Start a Podcast Project","service.podcast-production.item0.title": "Recording","service.podcast-production.item0.desc": "A clear, professional service designed for strong visual communication.","service.podcast-production.item1.title": "Editing","service.podcast-production.item1.desc": "A clear, professional service designed for strong visual communication.","service.podcast-production.item2.title": "Audio Branding","service.podcast-production.item2.desc": "A clear, professional service designed for strong visual communication.","service.podcast-production.item3.title": "Voice Recording","service.podcast-production.item3.desc": "A clear, professional service designed for strong visual communication.","service.podcast-production.item4.title": "Visual Podcast Setup","service.podcast-production.item4.desc": "A clear, professional service designed for strong visual communication.","service.podcast-production.item5.title": "Distribution","service.podcast-production.item5.desc": "A clear, professional service designed for strong visual communication.","pricing.currency.label": "Display prices in","pricing.currency.note": "Currency conversion is indicative. Final quotes are confirmed after project scope, location and production needs.","form.name": "Name","form.email": "Email","form.service": "Service needed","form.service.placeholder": "Choose a service","form.message": "Tell us about your project","form.submit": "Send project request","form.sending": "Sending…","form.success": "Thank you. Your project request has been sent.","form.error": "The message could not be sent. Please try again or contact us on WhatsApp.","form.thanks.title": "Thank you.","form.thanks.copy": "Your project request has been sent. We will get back to you soon.","form.thanks.back": "Back to the studio","sound.play": "Play","sound.pause": "Pause","sound.playLabel": "Play site mood","sound.pauseLabel": "Pause site mood","sound.volume": "Sound volume","sound.previous": "Previous track","sound.next": "Next track"},"fr": {"nav.home": "Accueil","nav.studio": "Studio","nav.services": "Services","nav.work": "Réalisations","nav.contact": "Contact","nav.faq": "FAQ","nav.start": "Démarrer un projet","hero.subtitle": "Des expériences visuelles qui créent l’émotion.","buttons.explore": "Voir les services","buttons.start": "Démarrer un projet","buttons.whatsapp": "Commencer sur WhatsApp","studio.statement": "<strong>BEWEGT CREATIVE STUDIO</strong> est un studio international de production visuelle entre l’Allemagne, l’Europe et l’Afrique — photographie, film, expériences live, design et son pour celles et ceux qui ont une histoire vraie à raconter.","services.heading": "Ce que nous créons","services.sub": "Chaque service possède sa page dédiée avec des offres claires, des usages précis et une direction de projet.","pricing.eyebrow": "Packs & tarifs","pricing.heading": "Des points de départ clairs, une production sur mesure.","pricing.sub": "Des formules indicatives inspirées des réalités du Togo, des marchés africains, de l’Europe et des standards internationaux.","pricing.local.kicker": "Local Access","pricing.local.title": "Pour le Togo & l’Afrique de l’Ouest","pricing.local.desc": "Des entrées professionnelles pour particuliers, églises, créateurs et événements locaux.","pricing.signature.kicker": "Signature","pricing.signature.title": "Le pack BEWEGT recommandé","pricing.signature.desc": "Pour les projets sérieux qui demandent plus de direction, une production propre et une post-production soignée.","pricing.international.kicker": "International / Brand","pricing.international.title": "Pour l’Europe, la diaspora & les institutions","pricing.international.desc": "Pour productions premium, campagnes de marque, ONG, entreprises et direction créative complète.","pricing.photo": "Photographie","pricing.video": "Vidéo","pricing.live": "Live streaming","pricing.design": "Design graphique","pricing.podcast": "Podcast","pricing.note": "Chaque devis dépend de la durée, du lieu, de l’équipe, du niveau de production, de la post-production et des droits d’utilisation. Des formules locales et internationales sont disponibles sur demande.","pricing.cta": "Demander un devis sur mesure","work.eyebrow": "Réalisations","work.heading": "Portfolio Design Graphique","work.sub": "Affiches, portraits créatifs, visuels d’anniversaire et campagnes événementielles pour la communication digitale.","faq.heading": "Avant de commencer","faq.q1": "Travaillez-vous en Europe et en Afrique ?","faq.a1": "Oui. BEWEGT CREATIVE STUDIO est basé en Allemagne et disponible pour des projets sélectionnés en Europe et en Afrique.","faq.q2": "Quels types de projets produisez-vous ?","faq.a2": "Photographie, production vidéo, documentaires, live streaming, design graphique et production podcast.","faq.q3": "Comment démarrer un projet ?","faq.a3": "Envoyez un message WhatsApp avec votre idée, la date, le lieu et le type de production souhaité.","cta.heading": "Travaillons<br>ensemble.","cta.sub": "Racontez-nous votre histoire. Photographie, production vidéo, live streaming, production podcast ou design graphique.","footer.tagline": "Des expériences visuelles qui créent l’émotion.","footer.contact": "Contact","footer.social": "Réseaux","footer.legal": "© 2026 BEWEGT CREATIVE STUDIO. Tous droits réservés.","page.service": "Service","page.explore": "Explorer plus","page.share": "Partagez votre idée, la date, le lieu et le type de production souhaité.","work.design": "Portfolio Design","work.selected": "Sélection de designs","service.photography.title": "Photographie","service.photography.tagline": "Portraits, mariages, événements et histoires visuelles avec un regard cinématographique.","service.photography.intro": "BEWEGT crée des photographies pour les personnes, marques, églises et communautés qui veulent des images sincères, élégantes et intemporelles.","service.photography.cta": "Démarrer un projet photo","service.photography.item0.title": "Portraits","service.photography.item0.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.photography.item1.title": "Mariages","service.photography.item1.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.photography.item2.title": "Événements","service.photography.item2.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.photography.item3.title": "Églises","service.photography.item3.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.photography.item4.title": "Photographie corporate","service.photography.item4.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.photography.item5.title": "Personal branding","service.photography.item5.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.video-production.title": "Production Vidéo","service.video-production.tagline": "Films, documentaires, interviews et contenus cinématographiques pour des histoires qui comptent.","service.video-production.intro": "Du concept au montage final, BEWEGT produit des vidéos avec structure, émotion et langage visuel premium.","service.video-production.cta": "Démarrer un projet vidéo","service.video-production.item0.title": "Films de mariage","service.video-production.item0.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.video-production.item1.title": "Documentaires","service.video-production.item1.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.video-production.item2.title": "Clips musicaux","service.video-production.item2.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.video-production.item3.title": "Vidéos corporate","service.video-production.item3.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.video-production.item4.title": "Interviews","service.video-production.item4.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.video-production.item5.title": "Contenu réseaux sociaux","service.video-production.item5.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.live-streaming.title": "Live Streaming","service.live-streaming.tagline": "Streaming multicaméra pour églises, concerts, conférences et événements hybrides.","service.live-streaming.intro": "BEWEGT accompagne les moments live avec un workflow fiable, un son clair et une réalisation professionnelle.","service.live-streaming.cta": "Planifier un live stream","service.live-streaming.item0.title": "Live streaming d’église","service.live-streaming.item0.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.live-streaming.item1.title": "Streaming de conférences","service.live-streaming.item1.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.live-streaming.item2.title": "Streaming de concerts","service.live-streaming.item2.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.live-streaming.item3.title": "Événements hybrides","service.live-streaming.item3.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.live-streaming.item4.title": "Production multicaméra","service.live-streaming.item4.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.live-streaming.item5.title": "Support broadcast","service.live-streaming.item5.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.graphic-design.title": "Design Graphique","service.graphic-design.tagline": "Affiches, campagnes visuelles, identité de marque et communication digitale.","service.graphic-design.intro": "BEWEGT conçoit des visuels qui aident les événements, artistes, ministères et marques à communiquer avec impact.","service.graphic-design.cta": "Démarrer un projet design","service.graphic-design.item0.title": "Affiches","service.graphic-design.item0.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.graphic-design.item1.title": "Designs d’anniversaire","service.graphic-design.item1.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.graphic-design.item2.title": "Campagnes","service.graphic-design.item2.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.graphic-design.item3.title": "Identité de marque","service.graphic-design.item3.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.graphic-design.item4.title": "Réseaux sociaux","service.graphic-design.item4.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.graphic-design.item5.title": "Supports professionnels","service.graphic-design.item5.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.podcast-production.title": "Production Podcast","service.podcast-production.tagline": "Enregistrement, montage, identité audio et visuels podcast pour des conversations qui comptent.","service.podcast-production.intro": "BEWEGT aide créateurs, églises, entreprises et communautés à produire des podcasts clairs, chaleureux et structurés.","service.podcast-production.cta": "Démarrer un projet podcast","service.podcast-production.item0.title": "Enregistrement","service.podcast-production.item0.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.podcast-production.item1.title": "Montage","service.podcast-production.item1.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.podcast-production.item2.title": "Branding audio","service.podcast-production.item2.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.podcast-production.item3.title": "Enregistrement voix","service.podcast-production.item3.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.podcast-production.item4.title": "Setup podcast vidéo","service.podcast-production.item4.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","service.podcast-production.item5.title": "Distribution","service.podcast-production.item5.desc": "Un service clair et professionnel pensé pour une communication visuelle forte.","pricing.currency.label": "Afficher les prix en","pricing.currency.note": "La conversion des devises est indicative. Les devis finaux sont confirmés selon le périmètre, le lieu et les besoins de production.","form.name": "Nom","form.email": "E-mail","form.service": "Service souhaité","form.service.placeholder": "Choisissez un service","form.message": "Parlez-nous de votre projet","form.submit": "Envoyer la demande","form.sending": "Envoi en cours…","form.success": "Merci. Votre demande de projet a bien été envoyée.","form.error": "Le message n’a pas pu être envoyé. Réessayez ou contactez-nous sur WhatsApp.","form.thanks.title": "Merci.","form.thanks.copy": "Votre demande de projet a bien été envoyée. Nous vous répondrons prochainement.","form.thanks.back": "Retour au studio","sound.play": "Play","sound.pause": "Pause","sound.playLabel": "Activer l’ambiance sonore","sound.pauseLabel": "Mettre l’ambiance sonore en pause","sound.volume": "Volume sonore","sound.previous": "Mélodie précédente","sound.next": "Mélodie suivante"},"de": {"nav.home": "Home","nav.studio": "Studio","nav.services": "Leistungen","nav.work": "Arbeiten","nav.contact": "Kontakt","nav.faq": "FAQ","nav.start": "Projekt starten","hero.subtitle": "Visuelle Erlebnisse, die Menschen bewegen.","buttons.explore": "Leistungen ansehen","buttons.start": "Projekt starten","buttons.whatsapp": "Auf WhatsApp starten","studio.statement": "<strong>BEWEGT CREATIVE STUDIO</strong> ist ein internationales Studio für visuelle Produktion zwischen Deutschland, Europa und Afrika — Fotografie, Film, Live-Erlebnisse, Design und Sound für Menschen, die etwas Echtes erzählen.","services.heading": "Was wir schaffen","services.sub": "Jede Leistung hat eine eigene Seite mit klaren Angeboten, Einsatzbereichen und Projektstruktur.","pricing.eyebrow": "Pakete & Preise","pricing.heading": "Klare Einstiegspunkte, maßgeschneiderte Produktion.","pricing.sub": "Richtpreise, inspiriert von lokalen Realitäten in Togo, afrikanischen Märkten, Europa und internationalen Markenstandards.","pricing.local.kicker": "Local Access","pricing.local.title": "Für Togo & Westafrika","pricing.local.desc": "Professionelle Einstiegspunkte für Privatpersonen, Kirchen, Creator und lokale Events.","pricing.signature.kicker": "Signature","pricing.signature.title": "Das empfohlene BEWEGT Paket","pricing.signature.desc": "Für ernsthafte Projekte mit stärkerer Regie, sauberer Produktion und verfeinerter Postproduktion.","pricing.international.kicker": "International / Brand","pricing.international.title": "Für Europa, Diaspora & Institutionen","pricing.international.desc": "Für Premium-Produktionen, Markenkampagnen, NGOs, Unternehmen und komplette kreative Leitung.","pricing.photo": "Fotografie","pricing.video": "Video","pricing.live": "Live Streaming","pricing.design": "Grafikdesign","pricing.podcast": "Podcast","pricing.note": "Jedes Angebot hängt von Dauer, Ort, Team, Produktionsniveau, Postproduktion und Nutzungsrechten ab. Lokale und internationale Formeln sind auf Anfrage verfügbar.","pricing.cta": "Individuelles Angebot anfragen","work.eyebrow": "Ausgewählte Arbeiten","work.heading": "Grafikdesign Portfolio","work.sub": "Poster, kreative Porträts, Geburtstagsvisuals und Kampagnen für digitale Kommunikation.","faq.heading": "Bevor wir starten","faq.q1": "Arbeiten Sie in Europa und Afrika?","faq.a1": "Ja. BEWEGT CREATIVE STUDIO ist in Deutschland ansässig und für ausgewählte Projekte in Europa und Afrika verfügbar.","faq.q2": "Welche Projekte produzieren Sie?","faq.a2": "Fotografie, Videoproduktion, Dokumentarfilm, Live Streaming, Grafikdesign und Podcast-Produktion.","faq.q3": "Wie starte ich ein Projekt?","faq.a3": "Senden Sie eine WhatsApp-Nachricht mit Ihrer Idee, Datum, Ort und der gewünschten Produktion.","cta.heading": "Lass uns<br>zusammenarbeiten.","cta.sub": "Erzählen Sie uns Ihre Geschichte. Fotografie, Filmproduktion, Live Streaming, Podcast-Produktion oder Grafikdesign.","footer.tagline": "Visuelle Erlebnisse, die Menschen bewegen.","footer.contact": "Kontakt","footer.social": "Social","footer.legal": "© 2026 BEWEGT CREATIVE STUDIO. Alle Rechte vorbehalten.","page.service": "Leistung","page.explore": "Mehr entdecken","page.share": "Teilen Sie Ihre Idee, Datum, Ort und die gewünschte Produktion.","work.design": "Design Portfolio","work.selected": "Ausgewählte Designarbeiten","service.photography.title": "Fotografie","service.photography.tagline": "Porträts, Hochzeiten, Events und visuelle Geschichten mit filmischem Blick.","service.photography.intro": "BEWEGT erstellt Fotografie für Menschen, Marken, Kirchen und Communities, die ehrliche, elegante und zeitlose Bilder möchten.","service.photography.cta": "Fotoprojekt starten","service.photography.item0.title": "Porträts","service.photography.item0.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.photography.item1.title": "Hochzeiten","service.photography.item1.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.photography.item2.title": "Events","service.photography.item2.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.photography.item3.title": "Kirchen","service.photography.item3.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.photography.item4.title": "Corporate Fotografie","service.photography.item4.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.photography.item5.title": "Personal Branding","service.photography.item5.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.video-production.title": "Videoproduktion","service.video-production.tagline": "Filme, Dokumentationen, Interviews und filmische Inhalte für Geschichten, die zählen.","service.video-production.intro": "Vom Konzept bis zum finalen Schnitt produziert BEWEGT Videos mit Struktur, Emotion und hochwertiger Bildsprache.","service.video-production.cta": "Videoprojekt starten","service.video-production.item0.title": "Hochzeitsfilme","service.video-production.item0.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.video-production.item1.title": "Dokumentationen","service.video-production.item1.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.video-production.item2.title": "Musikvideos","service.video-production.item2.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.video-production.item3.title": "Corporate Videos","service.video-production.item3.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.video-production.item4.title": "Interviews","service.video-production.item4.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.video-production.item5.title": "Social-Media-Content","service.video-production.item5.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.live-streaming.title": "Live Streaming","service.live-streaming.tagline": "Multikamera-Streaming für Kirchen, Konzerte, Konferenzen und hybride Events.","service.live-streaming.intro": "BEWEGT begleitet Live-Momente mit zuverlässigen Abläufen, klarem Sound und professioneller Bildregie.","service.live-streaming.cta": "Live Stream planen","service.live-streaming.item0.title": "Kirchen-Livestreaming","service.live-streaming.item0.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.live-streaming.item1.title": "Konferenz-Streaming","service.live-streaming.item1.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.live-streaming.item2.title": "Konzert-Streaming","service.live-streaming.item2.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.live-streaming.item3.title": "Hybride Events","service.live-streaming.item3.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.live-streaming.item4.title": "Multikamera-Produktion","service.live-streaming.item4.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.live-streaming.item5.title": "Broadcast-Support","service.live-streaming.item5.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.graphic-design.title": "Grafikdesign","service.graphic-design.tagline": "Poster, visuelle Kampagnen, Markenidentität und digitale Kommunikation.","service.graphic-design.intro": "BEWEGT gestaltet visuelle Materialien, die Events, Künstlern, Gemeinden und Marken starke Kommunikation ermöglichen.","service.graphic-design.cta": "Designprojekt starten","service.graphic-design.item0.title": "Poster","service.graphic-design.item0.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.graphic-design.item1.title": "Geburtstagsdesigns","service.graphic-design.item1.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.graphic-design.item2.title": "Kampagnen","service.graphic-design.item2.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.graphic-design.item3.title": "Markenidentität","service.graphic-design.item3.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.graphic-design.item4.title": "Social Media","service.graphic-design.item4.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.graphic-design.item5.title": "Geschäftsmaterialien","service.graphic-design.item5.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.podcast-production.title": "Podcast-Produktion","service.podcast-production.tagline": "Aufnahme, Schnitt, Audio-Identität und Podcast-Visuals für bedeutungsvolle Gespräche.","service.podcast-production.intro": "BEWEGT unterstützt Creator, Kirchen, Unternehmen und Communities bei klaren, warmen und strukturierten Podcasts.","service.podcast-production.cta": "Podcastprojekt starten","service.podcast-production.item0.title": "Aufnahme","service.podcast-production.item0.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.podcast-production.item1.title": "Schnitt","service.podcast-production.item1.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.podcast-production.item2.title": "Audio-Branding","service.podcast-production.item2.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.podcast-production.item3.title": "Sprachaufnahme","service.podcast-production.item3.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.podcast-production.item4.title": "Video-Podcast-Setup","service.podcast-production.item4.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","service.podcast-production.item5.title": "Distribution","service.podcast-production.item5.desc": "Eine klare, professionelle Leistung für starke visuelle Kommunikation.","pricing.currency.label": "Preise anzeigen in","pricing.currency.note": "Die Währungsumrechnung ist unverbindlich. Finale Angebote werden nach Projektumfang, Ort und Produktionsbedarf bestätigt.","form.name": "Name","form.email": "E-Mail","form.service": "Gewünschte Leistung","form.service.placeholder": "Leistung auswählen","form.message": "Erzählen Sie uns von Ihrem Projekt","form.submit": "Projektanfrage senden","form.sending": "Wird gesendet…","form.success": "Vielen Dank. Ihre Projektanfrage wurde gesendet.","form.error": "Die Nachricht konnte nicht gesendet werden. Versuchen Sie es erneut oder kontaktieren Sie uns über WhatsApp.","form.thanks.title": "Vielen Dank.","form.thanks.copy": "Ihre Projektanfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.","form.thanks.back": "Zurück zum Studio","sound.play": "Play","sound.pause": "Pause","sound.playLabel": "Sound des Studios abspielen","sound.pauseLabel": "Sound des Studios pausieren","sound.volume": "Lautstärke","sound.previous": "Vorheriger Titel","sound.next": "Nächster Titel"}};
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  function onScroll(){
    if(!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.type = 'button';
  backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.appendChild(backToTop);

  function setBackToTopLabel(){
    const labels = {
      en: 'Back to top',
      fr: 'Retour en haut',
      de: 'Zurueck nach oben'
    };
    backToTop.setAttribute('aria-label', labels[document.documentElement.lang] || labels.en);
  }

  function updateBackToTop(){
    backToTop.classList.toggle('is-visible', window.scrollY > Math.min(720, window.innerHeight * 0.85));
  }

  function scrollBackToTop(){
    const startY = window.scrollY;
    const duration = Math.min(900, Math.max(420, startY * 0.32));
    const startTime = performance.now();

    function easeOutCubic(t){
      return 1 - Math.pow(1 - t, 3);
    }

    function step(now){
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, Math.round(startY * (1 - easeOutCubic(progress))));
      if(progress < 1){
        requestAnimationFrame(step);
      }else{
        window.scrollTo(0, 0);
        updateBackToTop();
      }
    }

    requestAnimationFrame(step);
  }

  backToTop.addEventListener('click', scrollBackToTop);
  window.addEventListener('scroll', updateBackToTop, {passive:true});
  setBackToTopLabel();
  updateBackToTop();

  if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      if(nav) nav.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      if(nav) nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('button');
    const links = dropdown.querySelectorAll('a');
    if(!button) return;

    function setOpen(isOpen){
      dropdown.classList.toggle('is-open', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
    }

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setOpen(!dropdown.classList.contains('is-open'));
    });

    links.forEach(link => link.addEventListener('click', () => setOpen(false)));

    document.addEventListener('click', (event) => {
      if(!dropdown.contains(event.target)) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') setOpen(false);
    });
  });

  const contactSection = document.getElementById('contact');
  if(contactSection && 'IntersectionObserver' in window){
    const contactObserver = new IntersectionObserver(([entry]) => {
      document.body.classList.toggle('contact-in-view', entry.isIntersecting);
    }, { threshold: 0.12 });
    contactObserver.observe(contactSection);
  }

  function applyLang(lang){
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if(dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));
    localStorage.setItem('bewegtLang', lang);
    setBackToTopLabel();
  }
  const savedLang = localStorage.getItem('bewegtLang') || 'en';
  applyLang(savedLang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    setSoundLabel();
    if(siteSound && soundToggle && isSoundPlaying) playWelcomeMessage(true);
  }));

  // Form handled natively by Netlify — redirects to /thank-you after submission

  const currencyButtons = Array.from(document.querySelectorAll('.currency-btn'));
  const currencyConfig = {
    FCFA: { rate: 1, prefix: '', suffix: ' FCFA' },
    EUR: { rate: 1 / 655.957, prefix: '€', suffix: '' },
    USD: { rate: 1 / 610, prefix: '$', suffix: '' }
  };

  function compactFcfa(value){
    if(value >= 1000000) return `${Number((value / 1000000).toFixed(1))}M FCFA`;
    if(value >= 1000) return `${Math.round(value / 1000)}k FCFA`;
    return `${Math.round(value)} FCFA`;
  }

  function compactCurrency(value, currency){
    if(currency === 'FCFA') return compactFcfa(value);
    const converted = value * currencyConfig[currency].rate;
    const rounded = converted >= 1000 ? Math.round(converted / 50) * 50 : Math.round(converted / 5) * 5;
    return `${currencyConfig[currency].prefix}${rounded.toLocaleString('en-US')}${currencyConfig[currency].suffix}`;
  }

  function updateCurrency(currency = localStorage.getItem('bewegtCurrency') || 'FCFA'){
    const activeCurrency = currencyConfig[currency] ? currency : 'FCFA';
    document.querySelectorAll('.price-value').forEach(el => {
      const low = Number(el.dataset.priceLow || 0);
      const high = Number(el.dataset.priceHigh || 0);
      const isPlus = el.dataset.pricePlus === 'true';
      if(!low) return;
      el.textContent = isPlus
        ? `${compactCurrency(low, activeCurrency)}+`
        : `${compactCurrency(low, activeCurrency)} - ${compactCurrency(high, activeCurrency)}`;
    });
    currencyButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.currency === activeCurrency));
    localStorage.setItem('bewegtCurrency', activeCurrency);
  }

  currencyButtons.forEach(btn => btn.addEventListener('click', () => updateCurrency(btn.dataset.currency)));
  updateCurrency();

  const soundToggle = document.getElementById('soundToggle');
  const soundPrev = document.getElementById('soundPrev');
  const soundNext = document.getElementById('soundNext');
  const soundControl = document.getElementById('soundControl');
  const soundVolume = document.getElementById('soundVolume');
  const siteSound = document.getElementById('siteSound');
  const soundTracks = [
    { src: 'audio/relaxing1.mp3', title: 'BEWEGT Mood 01' },
    { src: 'audio/relaxing2.mp3', title: 'BEWEGT Mood 02' },
    { src: 'audio/relaxing3.mp3', title: 'BEWEGT Mood 03' },
    { src: 'audio/the-last-train-to-nowhere.mp3', title: 'The Last Train to Nowhere' },
    { src: 'audio/the-light-of-the-world.mp3', title: 'The Light of the World' },
    { src: 'audio/the-light-of-the-world-alt.mp3', title: 'The Light of the World II' }
  ];
  const welcomeTracks = {
    en: 'audio/welcome-en.m4a',
    fr: 'audio/welcome-fr.m4a',
    de: 'audio/welcome-de.m4a'
  };
  let isSoundPlaying = false;
  let isWelcomeIntro = false;
  let welcomeResumeTime = 0;
  let soundVolumeValue = Number(localStorage.getItem('bewegtSoundVolume') || 45) / 100;
  let currentSoundTrack = Number(localStorage.getItem('bewegtSoundTrack') || 0);
  const soundResumeIntent = localStorage.getItem('bewegtSoundResume') === '1';
  const savedSoundTime = Number(localStorage.getItem('bewegtSoundTime') || 0);
  if(!Number.isInteger(currentSoundTrack) || currentSoundTrack < 0 || currentSoundTrack >= soundTracks.length){
    currentSoundTrack = 0;
  }
  function setSoundLabel(){
    if(!soundToggle) return;
    const dict = translations[document.documentElement.lang] || translations.en;
    const copy = soundToggle.querySelector('.sound-copy');
    if(copy){
      copy.textContent = isSoundPlaying ? (dict['sound.pause'] || 'Pause') : (dict['sound.play'] || 'Play');
    }
    if(soundControl){
      soundControl.classList.toggle('is-playing', isSoundPlaying);
      soundTracks.forEach((_, i) => soundControl.classList.toggle(`sound-dance-${i}`, i === currentSoundTrack));
    }
    soundToggle.setAttribute('aria-pressed', String(isSoundPlaying));
    soundToggle.setAttribute('aria-label', isSoundPlaying ? (dict['sound.pauseLabel'] || 'Pause site mood') : (dict['sound.playLabel'] || 'Play site mood'));
    if(soundVolume){
      soundVolume.setAttribute('aria-label', dict['sound.volume'] || 'Sound volume');
    }
    if(soundPrev && soundNext){
      const track = soundTracks[currentSoundTrack] || soundTracks[0];
      soundPrev.setAttribute('aria-label', `${dict['sound.previous'] || 'Previous track'}: ${track.title}`);
      soundNext.setAttribute('aria-label', `${dict['sound.next'] || 'Next track'}: ${track.title}`);
      soundControl.setAttribute('data-track', String(currentSoundTrack + 1));
    }
  }

  function applySoundVolume(){
    if(soundVolume) soundVolume.value = Math.round(soundVolumeValue * 100);
    if(siteSound) siteSound.volume = soundVolumeValue;
  }

  function stopWelcomeMessage(){
    isWelcomeIntro = false;
    welcomeResumeTime = 0;
  }

  function playMusicTrack(resumeTime = 0){
    if(!siteSound) return;
    isWelcomeIntro = false;
    const track = soundTracks[currentSoundTrack] || soundTracks[0];
    if(!siteSound.src.includes(track.src)){
      siteSound.src = track.src;
      siteSound.load();
    }
    applySoundVolume();
    if(resumeTime > 0){
      const restoreTime = () => {
        if(Number.isFinite(siteSound.duration) && resumeTime < siteSound.duration){
          siteSound.currentTime = resumeTime;
        }
      };
      if(siteSound.readyState >= 1) restoreTime();
      else siteSound.addEventListener('loadedmetadata', restoreTime, {once:true});
    }
    siteSound.play().then(() => {
      isSoundPlaying = true;
      saveSoundState(true);
      setSoundLabel();
    }).catch(() => {
      isSoundPlaying = false;
      setSoundLabel();
    });
  }

  function playWelcomeMessage(force = false){
    const lang = document.documentElement.lang || 'en';
    const welcomeTrack = welcomeTracks[lang] || welcomeTracks.en;
    const welcomeKey = `bewegtWelcomeHeard-${lang}`;
    if(!force && sessionStorage.getItem(welcomeKey) === '1'){
      playMusicTrack();
      return;
    }

    const track = soundTracks[currentSoundTrack] || soundTracks[0];
    const wasOnMusicTrack = siteSound.src.includes(track.src);
    welcomeResumeTime = wasOnMusicTrack && Number.isFinite(siteSound.currentTime) ? siteSound.currentTime : 0;
    isWelcomeIntro = true;
    isSoundPlaying = true;
    saveSoundState(false);
    setSoundLabel();
    siteSound.src = welcomeTrack;
    siteSound.load();
    applySoundVolume();
    siteSound.play().catch(() => {
      sessionStorage.setItem(welcomeKey, '1');
      playMusicTrack();
    });
  }

  function saveSoundState(shouldResume = isSoundPlaying){
    localStorage.setItem('bewegtSoundResume', shouldResume ? '1' : '0');
    localStorage.setItem('bewegtSoundTrack', String(currentSoundTrack));
    if(siteSound && Number.isFinite(siteSound.currentTime)){
      localStorage.setItem('bewegtSoundTime', String(Math.max(0, siteSound.currentTime)));
    }
  }

  function setSoundTrack(index, shouldResume = isSoundPlaying){
    if(!siteSound) return;
    stopWelcomeMessage();
    currentSoundTrack = (index + soundTracks.length) % soundTracks.length;
    const track = soundTracks[currentSoundTrack];
    siteSound.src = track.src;
    siteSound.load();
    localStorage.setItem('bewegtSoundTrack', String(currentSoundTrack));
    localStorage.setItem('bewegtSoundTime', '0');
    setSoundLabel();
    if(shouldResume){
      siteSound.play().then(() => {
        isSoundPlaying = true;
        saveSoundState(true);
        setSoundLabel();
      }).catch(() => {
        isSoundPlaying = false;
        setSoundLabel();
      });
    }
  }

  function startSoundscape(){
    if(isSoundPlaying) return;
    if(!siteSound || !soundToggle) return;
    playWelcomeMessage();
  }

  function stopSoundscape(){
    if(!isSoundPlaying || !soundToggle) return;
    stopWelcomeMessage();
    if(siteSound) siteSound.pause();
    isSoundPlaying = false;
    saveSoundState(false);
    setSoundLabel();
  }

  if(soundToggle){
    if(siteSound) siteSound.src = soundTracks[currentSoundTrack].src;
    setSoundLabel();
    applySoundVolume();
    soundToggle.addEventListener('click', () => {
      if(isSoundPlaying) stopSoundscape();
      else startSoundscape();
    });
  }

  if(soundPrev){
    soundPrev.addEventListener('click', () => setSoundTrack(currentSoundTrack - 1));
  }

  if(soundNext){
    soundNext.addEventListener('click', () => setSoundTrack(currentSoundTrack + 1));
  }

  if(siteSound){
    siteSound.loop = false;
    siteSound.addEventListener('loadedmetadata', () => {
      if(soundResumeIntent && savedSoundTime > 0 && savedSoundTime < siteSound.duration){
        siteSound.currentTime = savedSoundTime;
      }
    }, {once:true});
    siteSound.addEventListener('timeupdate', () => {
      if(isSoundPlaying && !isWelcomeIntro) saveSoundState(true);
    });
    siteSound.addEventListener('ended', () => {
      if(isWelcomeIntro){
        const lang = document.documentElement.lang || 'en';
        sessionStorage.setItem(`bewegtWelcomeHeard-${lang}`, '1');
        isWelcomeIntro = false;
        playMusicTrack(welcomeResumeTime);
        welcomeResumeTime = 0;
        return;
      }
      setSoundTrack(currentSoundTrack + 1, true);
    });
  }

  window.addEventListener('beforeunload', () => saveSoundState(isSoundPlaying && !isWelcomeIntro));

  if(siteSound && soundResumeIntent){
    applySoundVolume();
    siteSound.play().then(() => {
      isSoundPlaying = true;
      setSoundLabel();
    }).catch(() => {
      isSoundPlaying = false;
      setSoundLabel();
    });
  }

  if(soundVolume){
    soundVolume.value = Math.round(soundVolumeValue * 100);
    soundVolume.addEventListener('input', () => {
      soundVolumeValue = Number(soundVolume.value) / 100;
      localStorage.setItem('bewegtSoundVolume', String(Math.round(soundVolumeValue * 100)));
      applySoundVolume();
    });
  }

  const cards = Array.from(document.querySelectorAll('.design-card'));
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const close = document.getElementById('lightboxClose');
  const prev = document.getElementById('lightboxPrev');
  const next = document.getElementById('lightboxNext');
  let index = 0;

  function openLightbox(i){
    if(!lightbox || !cards.length || !img) return;
    index = (i + cards.length) % cards.length;
    const card = cards[index];
    img.src = card.dataset.full || card.querySelector('img').src;
    caption.textContent = card.dataset.caption || '';
    lightbox.classList.add('is-open');
    document.body.classList.add('no-scroll');
    lightbox.setAttribute('aria-hidden','false');
  }
  function closeLightbox(){
    if(!lightbox || !img) return;
    lightbox.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    lightbox.setAttribute('aria-hidden','true');
    img.src = '';
  }
  function show(delta){ openLightbox(index + delta); }

  cards.forEach((card, i) => card.addEventListener('click', () => openLightbox(i)));
  if(close) close.addEventListener('click', closeLightbox);
  if(prev) prev.addEventListener('click', () => show(-1));
  if(next) next.addEventListener('click', () => show(1));
  if(lightbox) lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if(!lightbox || !lightbox.classList.contains('is-open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') show(-1);
    if(e.key === 'ArrowRight') show(1);
  });

  document.addEventListener('contextmenu', (e) => {
    if(e.target && e.target.tagName === 'IMG') e.preventDefault();
  });
  document.querySelectorAll('img').forEach(image => {
    image.setAttribute('decoding','async');
    image.setAttribute('draggable','false');
    image.addEventListener('dragstart', e => e.preventDefault());
  });
})();
