# CLAUDE.md — Arkneys Agency (arkneysagency.ch)

Ce fichier s'applique à tout le dépôt `arkneys-website`. Lis-le avant de toucher au code.

## 1. Règle n°1 : rien sans autorisation (primordial)

- Fais strictement ce qui est demandé, rien de plus. Aucune initiative, aucun « j'en ai profité pour… ».
- Toute décision non demandée (design, structure, contenu, nouvelle page, dépendance, renommage ou suppression de fichier) : propose d'abord, attends mon OK explicite.
- Tu interviens comme développeur senior : tu peux signaler un problème ou une incohérence, mais tu ne le corriges pas sans mon accord.
- **Attention : un `git push` sur `main` = mise en ligne immédiate** (Vercel redéploie en ~30 secondes). Donc jamais de commit sur `main` ni de push sans ma demande explicite.
- En cas de doute : une seule question courte, puis attends.

## 2. Le projet

- Site vitrine d'Arkneys Agency, studio IA basé à Zurich, positionné sur les PME premium de Suisse romande.
- Le visiteur type : un dirigeant de PME (hôtel 4–5★, fiduciaire de 15 à 50 personnes, cabinet dentaire, maison horlogère, gestion de fortune…) qui ne connaît rien à l'IA et veut savoir en 30 secondes ce que ça change pour lui, si ses données sont protégées et combien de temps ça prend.
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
- Certaines pages n'existent qu'en français (`dentaire.html`, `ia-banque-privee-suisse.html`, `ia-hotellerie-suisse-romande.html`, `ia-suisse-vs-americaine-pme.html`, `choisir-agence-ia-nlpd-suisse-romande.html`) : ne crée pas de version DE/EN sans que je le demande.

## 4. Textes du site

- Tu ne modifies, ne reformules et ne traduis aucun texte existant sans mon accord.
- Si un texte nouveau est nécessaire, propose-le-moi d'abord. Sinon, placeholder visible `[TEXTE À ÉCRIRE : …]`, listé en fin de réponse.
- Ton de tout texte que tu proposes : **direct et concret, sans jargon IA**. Des phrases courtes qui parlent au patron de son métier, de son temps et de ses données, pas de technologie. Interdits : « révolutionner », « booster », « IA de pointe », « solutions innovantes », « synergie », anglicismes inutiles, chiffres de gains inventés.
- Nom de la marque : **Arkneys Agency**.
- Formules de marque, à ne pas paraphraser : « Studio IA Suisse pour PME premium romandes » ; « L'IA souveraine pour les PME suisses ».
- Engagements affichés, à ne pas reformuler ni étendre : déploiement en quatre semaines ; données 100 % en Suisse (Infomaniak) ; DPA signé avant tout démarrage ; sans verrou propriétaire, sortie possible chaque trimestre ; conformité nLPD. Les quatre engagements : Souveraineté, Conformité, Discrétion, Mesurable.
- Coordonnées affichées (contact@arkneysagency.ch, WhatsApp +41 78 352 06 97, siège Zurich) et nom du fondateur : ne pas les modifier sans mon accord.

## 5. Structure de contenu (ne pas réordonner sans accord)

- Les **7 familles d'agents**, dans cet ordre : Conversation, Documents, Veille, Commerciaux, Analytiques, Traduction, Sur mesure. Chacune a sa page `agent-*.html`.
- Pages secteurs : `hotellerie`, `fiduciaire`, `dentaire`, `horlogerie`, `gestion-fortune`, plus `secteurs.html` en vue d'ensemble.
- Autres pages : `souverainete`, `a-propos`, `contact`, `start` (démarrer avec un agent), `cgv`, `mentions-legales`, `confidentialite`.
- CTA existants : « Réserver un Audit », « Réserver un échange », « Voir les 7 agents », bouton WhatsApp. Ne pas en ajouter, ne pas changer leur libellé.
- Aucun prix affiché sur le site : ne pas en ajouter.
- Toute nouvelle page doit être ajoutée à `sitemap.xml` et, si elle est prioritaire, à `llms.txt` : propose-le-moi, ne le fais pas d'office.

## 6. Identité visuelle (fidèle à l'existant)

- Thème sombre. Couleurs : uniquement les variables CSS existantes : `--ark-bg` (#080c14), `--ark-bg-alt` (#0c1320), `--ark-cyan` (#22d3ee) et ses variantes `--ark-cyan-light` / `--ark-cyan-bright`, `--ark-text` et ses variantes `-mid` / `-dim`, `--ark-border`, `--ark-border-strong`, `--ark-surface`, `--ark-emerald` (#4ade80). Pas de nouvelle couleur, pas de hex en dur dans un nouvel élément.
- Police : la pile système déjà en place (`-apple-system, 'Helvetica Now Var', 'Inter', 'Segoe UI', sans-serif`). Aucune police web ajoutée.
- Icônes : Iconify, jeu **Lucide** (`lucide:…`) uniquement, comme le reste du site.
- Logo : `logo-arkneys.png` / `logo-arkneys-512.png`. Ne pas redessiner, recolorer ou recadrer.
- Classes existantes à réutiliser (`ark-nav`, `ark-btn-primary`, `ark-btn-secondary`, `ark-bg-video`…) avant d'en créer de nouvelles. Un nouveau composant = me le proposer d'abord.
- Les dégradés sombres et la vidéo de fond du hero font partie du design : ne pas les retirer ni les modifier sans accord.
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
- La vidéo du hero est hébergée sur un serveur externe (CloudFront), sans image `poster` ni repli `prefers-reduced-motion`.
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
