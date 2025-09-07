const boutonsAjouter = document.querySelectorAll('.AjoutPanier');
const panier = [];

boutonsAjouter.forEach(bouton => {
    bouton.addEventListener('click', () => {
        //alert('Produit ajouté au panier');
        const produit = bouton.parentElement;
        const nom = produit.querySelector('.produit:data-nom').textContent;
        const prix = parseFloat(produit.querySelector('.produit:data-prix').textContent.split(' : ')[1]);
        panier.push({ nom, prix });
        console.log(panier);
        document.querySelector('#totalPanier').textContent = `Panier : ${panier.reduce((acc, curr) => acc + curr.prix, 0).toFixed(2)} €`;
    });

});
