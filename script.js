const boutonsAjouter = document.querySelectorAll('.produit button');
const panier = [];

boutonsAjouter.forEach(bouton => {
    bouton.addEventListener('click', () => {
        alert('Produit ajouté au panier');
        //const produit = bouton.parentElement;
        //const nom = produit.querySelector('h3').textContent;
        //const prix = parseFloat(produit.querySelector('p:last-child').textContent.split(' : ')[1]);

        //panier.push({ nom, prix });
        //console.log(panier); 
        //document.querySelector('#panier').textContent = `Panier : ${panier.reduce((acc, curr) => acc + curr.prix, 0).toFixed(2)} ���`; 
        
    });
    
});

//Validation du panier
const boutonValider = document.querySelector('#validerPanier');
