import { Component } from '@angular/core';
import { Client } from './client.model'; // Assurez-vous que le chemin est correct
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  activeTab: string = 'liste';
  clients: Client[] = []; // Tableau pour stocker les clients ajoutés
  nouveauClient: Client = new Client(); // Nouveau client à ajouter
  clientModif: Client = new Client(); // Client à modifier
  constructor(private clientservice:ClientService) {

}
  openTab(tabName: string) {
    this.activeTab = tabName;
  }
  ngOnInit() {
    this.getClients();
  }
  getClients() {
    this.clientservice.getClientsList().subscribe(res => {
      this.clients = res
      console.log(this.clients)
    })
  }

  ajouterClient() {
    // Vérifiez si les champs sont valides avant d'ajouter le client
    if (this.nouveauClient.code_client !='' && this.nouveauClient.nom !=''
      && this.nouveauClient.prenom !='' && this.nouveauClient.telephone !='') {
      this.clientservice.createClient(this.nouveauClient).subscribe(res => {
        console.log(res);
        this.getClients();
      })

      // Réinitialisez les champs du formulaire
      this.nouveauClient = new Client();
      this.activeTab = 'liste';
    }

  }

  ouvrirModification(client: Client) {
    this.clientModif = { ...client }; // Copiez les propriétés du client dans le formulaire de modification
    this.activeTab = 'modifier'; // Passez à l'onglet de modification
  }
  editerClient(client: Client) {
    // Copiez les valeurs du client à modifier dans le formulaire de modification
    this.clientModif = { ...client };
    this.openTab('modifier'); // Activez l'onglet de modification
  }
  modifierClient() {
    this.clientservice.updateClient(this.clientModif.id, this.clientModif).subscribe(res => {
      console.log(res)
      this.getClients();
      this.activeTab = 'liste';

    })
  }
  supprimerClient(id:number) {
    this.clientservice.deleteClient(id).subscribe(res => console.log(res))
    this.clients = this.clients.filter(client =>client.id != id)
    }}
