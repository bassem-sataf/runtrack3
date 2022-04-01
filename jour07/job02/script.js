'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
   var infos = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": 11, "creation":2019}'
   function jsonValueKey(string, key)
   {
       var obj = JSON.parse(string, key)
       console.log(obj[key])
   } 

   jsonValueKey(infos, 'address')

})
    