import { Component, OnInit } from '@angular/core';
import {
  AvatarOptions, AvatarStyle,
  Clothes, FacialHair, Top, Eyes, Mouth, Skin, Accessories, Eyebrow,
  Graphic, FacialHairColor, ClothesColor, HatColor, HairColor, Face,
} from 'avatar-angular-kapibara';

class AvatarEnums {
  value: string = '';
  label: string = '';

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css']
})
export class ChangeAvatarComponent implements OnInit {

  options: AvatarOptions =  new AvatarOptions();

  topsEnum = Top;
  facialHairEnum = FacialHair;
  clothesEnum = Clothes;

  accessories: AvatarEnums[] = [];
  clothColor: AvatarEnums[] = [];
  clothe: AvatarEnums[] = [];
  eyebrow: AvatarEnums[] = [];
  eyes: AvatarEnums[] = [];
  facialHair: AvatarEnums[] = [];
  facialHairColor: AvatarEnums[] = [];
  graphic: AvatarEnums[] = [];
  hairColor: AvatarEnums[] = [];
  hatColor: AvatarEnums[] = [];
  mouth: AvatarEnums[] = [];
  skin: AvatarEnums[] = [];
  tops: AvatarEnums[] = [];
  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.tops = this.getEnumList('tops',Top);
    this.facialHair = this.getEnumList('facialHair', FacialHair);
    this.clothe = this.getEnumList('clothe',Clothes);
    this.eyes = this.getEnumList('eyes', Eyes);
    this.eyebrow = this.getEnumList('eyebrow', Eyebrow);
    this.mouth = this.getEnumList('mouth',Mouth);
    this.skin = this.getEnumList('skin',Skin);
    this.accessories = this.getEnumList('accessories', Accessories);
    this.clothColor = this.getEnumList('clothColor', ClothesColor);
    this.facialHairColor = this.getEnumList('facialHairColor',FacialHairColor);
    this.graphic = this.getEnumList('graphic',Graphic);
    this.hatColor = this.getEnumList('hatColor',HatColor);
    this.hairColor = this.getEnumList('hairColor', HairColor);
  }

  getEnumList(campo: string, enumRef: any): AvatarEnums[] {
    return Object.keys(enumRef).map(key => {
      let label = enumRef[key].trim();
      return new AvatarEnums(label, `${campo}_${label}`);
    });
  }

  generateRandom() {
    this.options = new AvatarOptions();
    this.options.getRandom();
    this.options.style = AvatarStyle.TRANSPARENT;
  }

  get disabledColourFabric():boolean {
    if ((this.options.clothes === this.clothesEnum.BLAZER_SHIRT) || (this.options.clothes === this.clothesEnum.BLAZER_SWEATER)) {
      return true;
    }
    return false;
  }

  get disabledHatColour():boolean {
    if ((this.options.top === this.topsEnum.HIJAB) || (this.options.top === this.topsEnum.TURBAN) ||
      (this.options.top === this.topsEnum.WINTER_HAT1) || (this.options.top === this.topsEnum.WINTER_HAT2) ||
      (this.options.top === this.topsEnum.WINTER_HAT3) || (this.options.top === this.topsEnum.WINTER_HAT4)) {
      return false;
    }
    else return true;
  }

  get disabledHairColour():boolean {
    if ((this.options.top === this.topsEnum.LONGHAIR_BIGHAIR) || (this.options.top === this.topsEnum.LONGHAIR_BOB) ||
      (this.options.top === this.topsEnum.LONGHAIR_BUN) || (this.options.top === this.topsEnum.LONGHAIR_CURLY) ||
      (this.options.top === this.topsEnum.LONGHAIR_CURVY) || (this.options.top === this.topsEnum.LONGHAIR_DREADS) ||
      (this.options.top === this.topsEnum.LONGHAIR_FRO) || (this.options.top === this.topsEnum.LONGHAIR_FROBAND) ||
      (this.options.top === this.topsEnum.LONGHAIR_NOTTOOLONG) || (this.options.top === this.topsEnum.LONGHAIR_MIAWALLACE) ||
      (this.options.top === this.topsEnum.LONGHAIR_STRAIGHT) || (this.options.top === this.topsEnum.LONGHAIR_STRAIGHT2) ||
      (this.options.top === this.topsEnum.LONGHAIR_STRAIGHTSTRAND) || (this.options.top === this.topsEnum.SHORTHAIR_DREADS01) ||
      (this.options.top === this.topsEnum.SHORTHAIR_DREADS02) || (this.options.top === this.topsEnum.SHORTHAIR_FRIZZLE) ||
      (this.options.top === this.topsEnum.SHORTHAIR_SHAGGYMULLET) || (this.options.top === this.topsEnum.SHORTHAIR_SHORTCURLY) ||
      (this.options.top === this.topsEnum.SHORTHAIR_SHORTFLAT) || (this.options.top === this.topsEnum.SHORTHAIR_SHORTROUND) ||
      (this.options.top === this.topsEnum.SHORTHAIR_SHORTWAVED) || (this.options.top === this.topsEnum.SHORTHAIR_SIDES) ||
      (this.options.top === this.topsEnum.SHORTHAIR_THECAESAR) || (this.options.top === this.topsEnum.SHORTHAIR_THECAESARSIDEPART)) {
      return false;
    }
    else return true;
  }

}
