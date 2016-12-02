import { Travel }      from '../travel/travel';
import { Image }       from '../image-gallery/image';

import { TimelineItem} from '../timeline/timeline-item';
import { MenuItem}     from '../header/menu-item';

import { Constants }   from '../constants';

export class MockTravels {
  private app_constants : Constants;

  private regions: any [] = [
    {id: '1', name: 'Àsia'},  
    {id: '2', name: 'Àfrica'},  
    {id: '3', name: 'Europa'},  
    {id: '4', name: 'Amèrica del Nord'},  
    {id: '5', name: 'Amèrica del Sud'}
  ]

  private travels: Travel[] = [
    {id: 'cuba', name: 'Cuba', year: 2016, dateLabel: 'Novembre 2016', regionId: 4, numImages: 25},  
    {id: 'japo', name: 'Japó', year: 2016, dateLabel: 'Agost 2016', regionId: 1, numImages: 25},        
    {id: 'new_orleans', name: 'USA - Nova Orleans', year: 2015, dateLabel: 'Novembre 2015', regionId: 4, numImages: 25},    
    {id: 'senegal', name: 'Senegal', year: 2015, dateLabel: 'Agost 2015', regionId: 2, numImages: 25},    
    {id: 'islandia', name: 'Islàndia', year: 2014, dateLabel: 'Agost 2014', regionId: 3, numImages: 25},    
    {id: 'galapagos', name: 'Ecuador - Illes Galápagos', year: 2014, dateLabel: 'Agost 2014', regionId: 5, numImages: 25},    
    {id: 'puerto_rico', name: 'Puerto Rico', year: 2013, dateLabel: 'Març 2008', regionId: 4, numImages: 25},
    {id: 'brasil', name: 'Brasil', year: 2012, dateLabel: 'Agost 2012', regionId: 5, numImages: 63},
    {id: 'botswana', name: 'Botswana', year: 2011, dateLabel: 'Agost 2011', regionId: 2, numImages: 25},
    {id: 'sud_africa', name: 'Sud-àfrica', year: 2011, dateLabel: 'Agost 2011', regionId: 2, numImages: 25},
    {id: 'paris', name: 'França - París', year: 2010, dateLabel: 'Octubre 2010', regionId: 3, numImages: 25},   
    {id: 'india_sud', name: 'Índia Sud', year: 2010, dateLabel: 'Agost 2010', regionId: 1, numImages: 25},       
    {id: 'colombia', name: 'Colombia', year: 2009, dateLabel: 'Novembre 2009', regionId: 5, numImages: 35},
    {id: 'egipte', name: 'Egipte', year: 2009, dateLabel: 'Agost 2009', regionId: 2, numImages: 25},
    {id: 'etiopia', name: 'Etiòpia', year: 2009, dateLabel: 'Agost 2009', regionId: 2, numImages: 25},
    {id: 'dublin', name: 'Irlanda - Dublín', year: 2008, dateLabel: 'Novembre 2008', regionId: 3, numImages: 25},
    {id: 'tailandia', name: 'Tailàndia', year: 2008, dateLabel: 'Agost 2008', regionId: 1, numImages: 25},
    {id: 'vietnam', name: 'Vietnam', year: 2008, dateLabel: 'Agost 2008', regionId: 1, numImages: 25},
    {id: 'cambotja', name: 'Cambotja', year: 2008, dateLabel: 'Agost 2008', regionId: 1, numImages: 25},
    {id: 'india_nord', name: 'Índia Nord', year: 2007, dateLabel: 'Agost 2007', regionId: 1, numImages: 25},   
    {id: 'peru', name: 'Perú', year: 2006, dateLabel: 'Juliol 2006', regionId: 5, numImages: 5},
    {id: 'bolivia', name: 'Bolívia', year: 2006, dateLabel: 'Juliol 2006', regionId: 5, numImages: 25},    
  ];

  private TRAVEL_DESCRIPTION : string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.";


  //Get timeline Items
  private timeline : TimelineItem[] = [];


  constructor(){
    this.app_constants = new Constants();
  }  


  public getTimeline() : TimelineItem [] {    
    var newTimelineItem : TimelineItem;

    for (var index: number = 0; index < this.travels.length; index++) {
      newTimelineItem = {title: this.travels[index].name, description: this.TRAVEL_DESCRIPTION, dateLabel: this.travels[index].dateLabel, buttonLabel:'Anar', routerLink: '/travel/'+this.travels[index].id,type: 'photo'}; 
      this.timeline.push(newTimelineItem);      
    };
   
    return this.timeline;
  }

  //Get menu Items
  private menuItems : MenuItem[] = [];
  public getMenuItems() : MenuItem [] {    
    var newRegionMenuItem : MenuItem;
    var newTravelMenuItem : MenuItem;
    var travelsByRegion :Travel[];

    //Iteration of regions
    for (var index_regions: number = 0; index_regions < this.regions.length; index_regions++) {    
      newRegionMenuItem = {label: this.regions[index_regions].name, items: []}; 
      
      //Get region travels
      travelsByRegion = this.travels.filter(t => t.regionId == this.regions[index_regions].id);

      //Sort travels alphabetically
      travelsByRegion.sort ((left, right): number => {
        if (left.name < right.name) return -1;
        if (left.name > right.name) return 1;
        return 0;
      }); 
      
      //Iteration of travels for each region
      for (var index_travel: number = 0; index_travel < travelsByRegion.length; index_travel++) {
        
        newTravelMenuItem = {label: travelsByRegion[index_travel].name, routerLink: '/travel/'+travelsByRegion[index_travel].id}; 

        newRegionMenuItem.items.push(newTravelMenuItem);      
      };
      this.menuItems.push(newRegionMenuItem);     
   };
    return this.menuItems;
  }

  public getTravels() : Travel[]{
    return this.travels;
  }

  public getTravel(id : string) : Travel{
    return this.travels.find(t => t.id == id);
  }

  public getImages(id : string) : Image[]{
    var thumb : string;
    var img :string;
    var imgFileName : string;
    var travel : Travel = this.travels.find(t => t.id == id);
    var images : Image[] = [];

    if (!(travel == null)) {
      for (var index: number = 0; index < travel.numImages; index++) {
        if (travel.id == 'brasil' || travel.id == 'colombia' ) {
          imgFileName = travel.id + '-' + (index+1) + '.jpg';
          thumb = this.app_constants.imageGalleryThumbnailUrl + imgFileName;
          img = this.app_constants.imageGalleryUrl + imgFileName;          
        }

        else {
          thumb = 'http://placehold.it/'+ this.getRandomInt(200, 500) +'x250';
          img = 'http://placehold.it/'+ this.getRandomInt(1000, 1500) +'x'+ this.getRandomInt(1000, 1500);
        }

        images[index] = {thumb: thumb, img : img, description: 'Image description '+index};      
      }
    }

    return images;
  }
  


  private getRandomInt(min:number, max:number) : number{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}