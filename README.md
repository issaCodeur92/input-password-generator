# Input Password Generator

## Description
Le choix d'utiliser un mot de passe peut être une étape fastidieuse pour les visiteurs qui cherchent à naviguer rapidement. C'est pourquoi ce package offre la possibilité d'intégrer un input permettant de générer un mot de passe pour l'utilisateur qui souhaite aller plus vite ou ne veut pas utiliser un code confidentiel sur un site ou une plateforme inconnue.
Le package INPUT-PASSWORD-GENERATOR utilise une boîte de dialogue utilisant la bibliothèque SweetAlert2, facile à utiliser et prend en compte le nombre de lettres majuscules, le nombre de lettres minuscules, le nombre de caractères spéciaux et le nombre de chiffres qui seront prédéfinis par le développeur. De plus, il offre la possibilité de modifier le texte du menu pop-up et le texte des boutons du menu pop-up, ainsi que la disposition de l'input.
Mon package est une solution pratique et efficace pour les développeurs qui souhaitent donner le choix à leurs visiteurs de générer un mot de passe pour leur permettre de continuer leur processus sans perdre de temps. Enfin, il offre une alternative sécurisée à l'utilisation d'un mot de passe lorsqu'un visiteur ne souhaite pas en créer un lui-même.

## Installation
Pour installer le package, utilisez la commande suivante :
```
npm install input-password-generator
```

### Utilisation
Pour utiliser le générateur de mots de passe, vous devez tout d'abord importer le composant dans votre projet Vue. Vous pouvez ensuite utiliser le composant dans votre template en ajoutant les attributs pour spécifier le nombre de chiffres, de lettres majuscules, de lettres minuscules et de caractères spéciaux que vous souhaitez inclure dans le mot de passe :
```
<template>
  <InputPasswordGenerator :menu-title="menuTitle" :cancel-text="cancelText" :confirm-text="confirmText" :num-chars="4" :num-lowercase="2" :num-uppercase="1" :num-special="1" />
</template>

<script>
import InputPassWordGenerator from 'input-password-generator/src/InputPasswordGenerator.vue'
export default{
  components: { InputPassWordGenerator },
  data(){
    return{
      confirmText: 'Générer',
      cancelText: 'Annuler'
      menuTitle:'Vous pouvez générer un mot de passe pour aller rapidement'
    }
  }
}
</script>
```
Le composant génère un mot de passe aléatoire à chaque fois que vous cliquez sur le bouton "Générer". Le mot de passe est automatiquement affiché dans l'input text.

### Configuration
Le composant accepte les attributs suivants :
```
→num-chars : le nombre total de caractères dans le mot de passe (par défaut : 8)
→num-lowercase : le nombre de lettres minuscules dans le mot de passe (par défaut : 2)
→num-uppercase : le nombre de lettres majuscules dans le mot de passe (par défaut : 1)
→num-special : le nombre de caractères spéciaux dans le mot de passe (par défaut : 1)
→menu-title : le titre du menu pop-up qui s'affiche lorsqu'on clique sur l'input (par défaut : "Generate password")
→confirm-text : le text du bouton de confirmation du menu pop up (par défaut : "Generate")
→cancel-text : le text du bouton d'annulation' du menu pop up (par défaut : "Cancel")


```
