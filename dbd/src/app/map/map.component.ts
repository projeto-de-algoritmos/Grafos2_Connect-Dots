import { Component, OnInit } from '@angular/core';
import { LinkedList } from '../lista';

interface Arestas {
  de: number;
  para: number;
}
interface Casa {
  l: number;
  c: number;
}
interface Palets {
  casa: Casa,
  aberta: boolean
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  listas: LinkedList<number>[] = [];

  white: Casa[] = [];
  windows: Casa[] = [
    {l:3,c:8},
    {l:4,c:19},
    {l:8,c:17},
    {l:12,c:5},
    {l:18,c:15},
    {l:22,c:9},
  ];
  generators: Casa[] = [
    {l:3,c:3},
    {l:3,c:25},
    {l:16,c:16},
    {l:22,c:2},
    {l:28,c:25}
  ];
  palets: Palets[] = [
    {casa: {l:2,c:21}, aberta: true},
    {casa: {l:6,c:25}, aberta: true},
    {casa: {l:11,c:18}, aberta: true},
    {casa: {l:12,c:1}, aberta: true},
    {casa: {l:12,c:27}, aberta: true},
    {casa: {l:15,c:19}, aberta: true},
    {casa: {l:17,c:10}, aberta: true},
    {casa: {l:18,c:24}, aberta: true},
    {casa: {l:20,c:1}, aberta: true},
  ];
  start: Casa[] = [
    {l:5,c:5},
    {l:5,c:23},
    {l:23,c:5},
    {l:23,c:23},
  ]

  playerPosition: Casa = {} as Casa;;
  killerPosition: Casa = {} as Casa;

  constructor() { }

  ngOnInit(): void {
    this.mapInit();
    this.startPositions();
  }

  startPositions(){
    let index = Math.floor(Math.random() * 4)
    this.playerPosition = this.start[index]
    console.log(this.playerPosition);

    if(this.playerPosition.l == 5) this.killerPosition.l = 23;
    else this.killerPosition.l = 5;
    if(this.playerPosition.c == 5) this.killerPosition.c = 23;
    else this.killerPosition.c = 5;
    console.log(this.killerPosition);
  }

  getColor(casa: Casa){

    if(this.palets.find(a=>a.casa.l==casa.l && a.casa.c==casa.c)!== undefined){
      if(this.palets.find(a=>a.casa.l==casa.l && a.casa.c==casa.c)?.aberta == true)
        return 'bg-red-300';
      else 
        return 'bg-red-500';
    }

    if(this.white.find(a=>a.l==casa.l && a.c==casa.c)!== undefined)
      return 'bg-white'

    if(this.windows.find(a=>a.l==casa.l && a.c==casa.c)!== undefined)
      return 'bg-blue-500'
    
    if(this.generators.find(a=>a.l==casa.l && a.c==casa.c)!== undefined)
      return 'bg-yellow-500'

    if(casa.l==28 && casa.c==15)
      return 'bg-green-500'

    return 'bg-black';
  }

  mapInit(){
    let coluna = [];
    for(let i=1; i<28; i++){
      if(i!=8 && i!=14 && i!=22)
        this.white.push({l:1,c:i})
    }
    coluna = [1,5,9,13,17,21,23,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:2,c:i})
    }
    coluna = [1,4,5,6,7,9,11,12,13,14,15,16,17,19,20,21,22,23,24,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:3,c:i})
    }
    coluna = [1,9,15,17,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:4,c:i})
    }
    coluna = [1,2,3,4,5,6,7,8,9,11,12,13,15,17,18,19,20,21,22,23,24,25,26,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:5,c:i})
    }
    coluna = [1,3,7,11,15,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:6,c:i})
    }
    coluna = [1,3,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:7,c:i})
    }
    coluna = [1,3,5,7,19,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:8,c:i})
    }
    coluna = [1,3,5,7,9,10,11,12,13,14,15,17,18,19,21,22,23,24,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:9,c:i})
    }
    coluna = [1,3,5,7,9,19,21,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:10,c:i})
    }
    coluna = [1,3,5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,24,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:11,c:i})
    }
    coluna = [1,3,7,9,11,17,19,21,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:12,c:i})
    }
    coluna = [1,3,4,5,7,9,11,17,19,21,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:13,c:i})
    }
    coluna = [1,3,5,7,9,11,17,19,21,22,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:14,c:i})
    }
    coluna = [1,3,5,7,9,11,17,19,21,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:15,c:i})
    }
    coluna = [1,3,5,7,9,11,17,19,21,22,23,24,25,26,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:16,c:i})
    }
    coluna = [1,3,4,5,6,7,9,10,11,12,13,14,15,16,17,19,21,23,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:17,c:i})
    }
    coluna = [1,5,9,19,21,23,24,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:18,c:i})
    }
    coluna = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:19,c:i})
    }
    coluna = [1,13,21,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:20,c:i})
    }
    coluna = [1,2,3,5,6,7,8,9,10,11,13,14,15,17,18,19,20,21,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:21,c:i})
    }
    coluna = [3,5,11,13,15,17,23,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:22,c:i})
    }
    coluna = [1,2,3,5,7,8,9,11,12,13,15,17,18,19,20,21,23,25,26,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:23,c:i})
    }
    coluna = [1,3,5,7,9,15,21,23,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:24,c:i})
    }
    coluna = [1,3,4,5,7,9,10,11,12,13,15,17,18,19,20,21,23,24,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:25,c:i})
    }
    coluna = [1,7,11,15,17,25,27]
    for(let i=1; i<28; i++){
      if(coluna.includes(i))
        this.white.push({l:26,c:i})
    }
    for(let i=1; i<28; i++){
      this.white.push({l:27,c:i})
    }
  }
}
