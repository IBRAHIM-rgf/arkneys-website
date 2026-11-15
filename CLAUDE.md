# CLAUDE.md — Arkneys Agency (arkneysagency.ch)

Ce fichier s'applique à tout le dépôt `arkneys-website`. Lis-le avant de toucher au code.

## 1. Règle n°1 : rien sans autorisation (primordial)

- Fais strictement ce qui est demandé, rien de plus. Aucune initiative, aucun « j'en ai profité pour… ».
- Toute décision non demandée (design, structure, contenu, nouvelle page, dépendance, renommage ou suppression de fichier) : propose d'abord, attends mon OK explicite.
- Tu interviens comme développeur senior : tu peux signaler un problème ou une incohérence, mais tu ne le corriges pas sans mon accord.
- **Attention : un `git push` sur `main` = mise en ligne immédiate** (Vercel redéploie en ~30 secondes). Donc jamais de commit sur `main` ni de push sans ma demande explicite.
- En cas de doute : une seule question courte, puis attends.

## 2. Le projet

- Site vitrine d'Arkneys Agency, studio IA basé à Zurich, positionné (depuis novembre 2026) sur la gestion de fortune : banques privées, gérants de fortune indépendants, multi-family offices. Offre : structuration et classement de la base client, vendue au projet.
- Le visiteur type : un dirigeant de banque privée, de société de gestion ou de family office (CEO, CRO, COO, conformité) qui veut savoir en 30 secondes ce que l'offre change pour sa base client, si ses données restent chez lui et combien de temps ça prend.
- Dépôt : github.com/IBRAHIM-rgf/arkneys-website. Domaine : https://arkneysagency.ch (registrar et e-mails chez Infomaniak).
- Stack : **HTML statique, vanilla JS, aucun build**. Chaque page a son propre bloc `<style>` inline. Seuls fichiers JS externes : `/mobile-nav.js` (menu burger) et Iconify. Ne pas introduire de framework, de bundler, de Tailwind ni de fichier CSS partagé sans mon accord.
- Hébergement : **Vercel** (`vercel.json` : `cleanUrls`, en-têtes de sécurité, redirections). Ne pas modifier `vercel.json` sans accord.
- Lis `README.md` et `llms.txt` avant toute modification importante.

## 3. Site en trois langues : règle critique

- Le français est la langue de référence (racine du dépôt). Les versions **allemande (`/de/`)** et **anglaise (`/en/`)** sont des copies complètes des pages.
- En plus, `index.html` contient un dictionnaire de traduction JS (`const I18N = …`) relié aux attributs `data-i18n`, et la langue choisie est mémorisée dans `localStorage` (`ark_lang`).
- Donc un texte peut exister à **plusieurs endroits** : le HTML français, la clé `I18N`, `/de/…html` et `/en/…html`. Avant de modifier un texte ou un élément commun (header, footer, menu, CTA), **liste-moi tous les fichiers et clés concernés** et attends mon OK.
- Une modification faite en français n'est jamais répercutée en DE/EN sans mon accord, et inversement.
- Je ne parle pas allemand : pour toute nouvelle phrase en allemand, donne-moi aussi sa traduction française pour que je puisse valider le sens.
- Une page n'existe qu'en français (`ia-banque-privee-suisse.html`) : ne crée pas de version DE/EN sans que je le demande.

## 4. Textes du site

- Tu ne modifies, ne reformules et ne traduis aucun texte existant sans mon accord.
- Si un texte nouveau est nécessaire, propose-le-moi d'abord. Sinon, placeholder visible `[TEXTE À ÉCRIRE : …]`, listé en fin de réponse.
- Ton de tout texte que tu proposes : **registre business, sans jargon IA**, dans chaque langue (FR business, anglais business international, allemand standard suisse avec « Sie » et « ss »). Des phrases qui parlent au dirigeant de sa base client, de sa conformité et de ses données, pas de technologie. Interdits : « révolutionner », « booster », « IA de pointe », « solutions innovantes », « synergie », anglicismes inutiles, chiffres de gains inventés.
- Nom de la marque : **Arkneys Agency**.
- Formules de marque, à ne pas paraphraser : « Studio IA suisse pour la gestion de fortune » ; « L'IA souveraine pour la gestion de fortune suisse ».
- Engagements affichés, à ne pas reformuler ni étendre : un premier lot de la base client structuré en quatre semaines (calendrier complet arrêté lors de l'audit) ; installation dans l'infrastructure du client, les données ne quittent pas ses serveurs ; DPA signé avant tout démarrage ; sans verrou propriétaire, sortie possible chaque trimestre ; conformité nLPD ; aucune décision d'investissement ni de conformité automatisée. Les quatre engagements : Souveraineté, Conformité, Discrétion, Mesurable.
- Le nom du fondateur ne doit pas être mis en avant sur les nouveaux éléments (bande de confiance, accroches).
- Coordonnées affichées (contact@arkneysagency.ch, WhatsApp +41 78 352 06 97, siège Zurich) et nom du fondateur : ne pas les modifier sans mon accord.

## 5. Structure de contenu (ne pas réordonner sans accord)

- L'offre : une page `offre.html` (4 étapes : Audit de votre base client, Cadrage, Structuration, Suivi). Les anciennes pages agents, PME et `start` sont supprimées et redirigées dans `vercel.json`.
- Secteurs : `secteurs.html` (banques privées `#banques`, gérants indépendants `#gerants`, multi-family offices `#family-offices`) et `gestion-fortune.html`.
- Autres pages : `souverainete`, `a-propos`, `contact`, `cgv`, `mentions-legales`, `confidentialite`, `ia-banque-privee-suisse` (FR).
- CTA existants : « Réserver un Audit », « Réserver un échange », « Voir l'offre », bouton WhatsApp. Ne pas en ajouter, ne pas changer leur libellé.
- Aucun prix affiché sur le site : ne pas en ajouter.
- Toute nouvelle page doit être ajoutée à `sitemap.xml` et, si elle est prioritaire, à `llms.txt` : propose-le-moi, ne le fais pas d'office.

## 6. Identité visuelle (fidèle à l'existant)

- Identité « piste A — Nuit & bronze » (novembre 2026). Thème sombre bleu nuit, accent bronze. Couleurs : uniquement les variables CSS existantes (les noms `--ark-cyan*` sont conservés mais contiennent du bronze) : `--ark-bg` (#0b1018), `--ark-bg-alt` (#111824), `--ark-cyan` (#b8925a, bronze) et ses variantes `--ark-cyan-light` (#c9a66e) / `--ark-cyan-bright` (#dcc290), `--ark-text` (#ece7dd) et ses variantes `-mid` / `-dim`, `--ark-border`, `--ark-border-strong`, `--ark-surface`. Plus de cyan ni de vert « emerald ». Pas de nouvelle couleur, pas de hex en dur dans un nouvel élément.
- Polices : titres (`.ark-h1`, `.ark-h2`, h1/h2 du contenu, numéros d'étapes) en **Cormorant Garamond 600, auto-hébergée** dans `/fonts/` (licence OFL jointe) ; texte courant dans la pile système (`-apple-system, 'Helvetica Now Var', 'Inter', 'Segoe UI', sans-serif`). Jamais de Google Fonts ni d'autre police chargée depuis un serveur tiers.
- Boutons à angles quasi droits (`border-radius: 2px`). Pas de vidéo de fond : fond uni.
- Icônes : Iconify, jeu **Lucide** (`lucide:…`) uniquement, comme le reste du site.
- Logo : `logo-arkneys.png` / `logo-arkneys-512.png`. Ne pas redessiner, recolorer ou recadrer.
- Classes existantes à réutiliser (`ark-nav`, `ark-btn-primary`, `ark-btn-secondary`, `ark-bg-video`…) avant d'en créer de nouvelles. Un nouveau composant = me le proposer d'abord.
- La vidéo de fond a été retirée (novembre 2026) : ne pas en remettre sans accord.
- Un style modifié dans une page doit l'être dans **toutes les pages des trois langues** (CSS inline dupliqué). Liste-moi les fichiers touchés.

## 7. Interdits pour tout nouvel élément (le « look IA générique »)

Un studio IA qui a l'air généré par IA perd sa crédibilité. Donc :

- Pas de dégradés violet/bleu, pas de blobs, pas de glassmorphism gratuit, pas de cartes dans des cartes.
- Pas d'illustrations de robots, de cerveaux, de circuits ou de réseaux de neurones lumineux.
- Pas d'emoji, pas de compteurs « +300 % de productivité » inventés.
- Pas d'animation au scroll ajoutée sur chaque bloc.
- Pas de nouvelle librairie JS, de nouveau script tiers, de cookie, de tracker ou d'outil d'analytics : la sobriété et la nLPD sont des arguments de vente.

## 8. Finitions (avant de me montrer une page)

- Vérifier à 375 px, 768 px et 1440 px : aucun débordement, menu burger fonctionnel (`mobile-nav.js`, bascule à 980 px).
- `text-wrap: balance` sur les nouveaux titres.
- Zones cliquables ≥ 44×44 px : menu mobile, CTA, WhatsApp, e-mail.
- Transitions avec propriétés explicites, jamais `transition: all` dans le nouveau code.
- `:focus-visible` visible ; contraste ≥ 4.5:1 (attention aux textes `--ark-text-dim` sur fond sombre).
- Images : `width`/`height` renseignés, `loading="lazy"` sauf au premier écran, `alt` descriptif dans la langue de la page.
- Liens internes : suivre la convention existante (`contact.html` en relatif) ; `cleanUrls` gère l'URL sans `.html`. Vérifier qu'aucun lien n'est cassé, dans les trois langues.

## 9. SEO et métadonnées

- `lang` correct sur chaque page (`fr`, `de`, `en`) et balises `hreflang` cohérentes entre les trois versions.
- Chaque page : son propre `<title>` (50–60 caractères), `meta description` (120–160), `canonical`, Open Graph. Ces textes suivent la règle de la section 4 : je les valide.
- Un seul `<h1>` par page.
- `robots.txt` autorise volontairement les robots des IA (GPTBot, ClaudeBot, PerplexityBot…) : ne pas changer.

## 10. Points déjà repérés (à me signaler, ne pas corriger sans accord)

- La page d'accueil française ne déclare que `hreflang="fr-CH"` et `x-default`, alors que la version allemande déclare aussi `de-CH` et `en`.
- Erreur JavaScript sur toutes les pages FR : `applyLang` cherche un bouton `lang-fr` absent (`Cannot read properties of null`), ce qui empêche la suite de l'initialisation (bandeau cookies).
- Le fichier `_writetest.tmp` est versionné dans le dépôt.
- Le `README.md` décrit une structure `deploy/` et une liste de pages qui ne correspondent plus au dépôt actuel.

## 11. Méthode de travail

1. Avant de coder : me décrire en 5 lignes ce que tu vas faire (fichiers touchés dans les trois langues, clés `I18N`, textes ou images manquants). **Attendre mon OK.**
2. Travailler sur une **branche** (pas sur `main`), me montrer le résultat (l'aperçu Vercel de la branche si disponible), **attendre mon OK**.
3. Passe de finitions (section 8) et vérification des liens.
4. Récapitulatif court : fichiers modifiés, éléments manquants, choix à valider.
5. Fusion dans `main` et push uniquement sur ma demande. Messages de commit clairs.
6. Après chaque publication : me donner les **liens des pages concernées** sur https://arkneysagency.ch (et leurs versions `/de/` et `/en/` si touchées).

## 12. Ce que je ne veux pas voir

- Des textes réécrits, traduits ou « améliorés » sans accord.
- Du jargon IA ou des promesses chiffrées inventées.
- Des changements hors du périmètre demandé.
- Une nouvelle couleur, police, dépendance, cookie ou script tiers sans accord.
- Une modification appliquée à une seule langue ou à une seule page alors qu'elle concerne tout le site.
- Un push sur `main` non demandé.
