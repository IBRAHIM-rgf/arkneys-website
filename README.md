# Arkneys Agency — Site officiel

Site marketing d'Arkneys Agency · Studio IA Suisse · Zurich · Romandie.

## Stack technique

- **HTML statique** (aucun build step, vanilla JS)
- **Hébergement** : Vercel (free tier, CDN mondial, HTTPS Let's Encrypt auto)
- **Versionning** : GitHub (privé)
- **Domaine** : arkneysagency.ch (registrar Infomaniak)
- **Emails** : Infomaniak (préservés, indépendants du site)

## Structure

```
deploy/
├── index.html                  Accueil
├── agents.html                 Vue d'ensemble des 7 agents
├── agent-conversation.html     Page dédiée agent Conversation
├── agent-documents.html        Page dédiée agent Documents
├── agent-veille.html           Page dédiée agent Veille
├── agent-commerciaux.html      Page dédiée agent Commerciaux
├── agent-analytiques.html      Page dédiée agent Analytiques
├── agent-traduction.html       Page dédiée agent Traduction
├── agent-sur-mesure.html       Page dédiée agent Sur mesure
├── secteurs.html               Page secteurs (hôtellerie / fiduciaires / autres)
├── a-propos.html               Page à propos + 4 engagements détaillés
├── contact.html                Page contact (email + WhatsApp)
├── start.html                  Page démarrer avec un agent (dynamique)
├── favicon-*.png               Favicons toutes tailles
├── apple-touch-icon.png        Icon iOS
├── vercel.json                 Config Vercel (sécurité headers, cleanUrls)
├── .gitignore                  Fichiers à ne pas committer
└── README.md                   Ce fichier
```

## Déploiement

À chaque `git push` sur la branche `main`, Vercel redéploie automatiquement le site.
Pour rollback : aller dans le dashboard Vercel → Deployments → cliquer sur un ancien déploiement → "Promote to Production".

## Modifications

Pour modifier une page :
1. Éditer le fichier HTML correspondant
2. `git add .` puis `git commit -m "description du changement"`
3. `git push`
4. Vercel redéploie en ~30 secondes

## Liens utiles

- **Production** : https://arkneysagency.ch
- **Vercel dashboard** : https://vercel.com/dashboard
- **DNS Infomaniak** : https://manager.infomaniak.com/

## Contact

ibrahim Ghomm — contact@arkneysagency.ch
