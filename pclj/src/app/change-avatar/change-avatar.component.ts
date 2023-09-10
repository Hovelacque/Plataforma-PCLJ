import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AvatarOptions, AvatarAngularKapibaraComponent,
  Clothes, FacialHair, Top, Eyes, Mouth, Skin, Accessories, Eyebrow,
  Graphic, FacialHairColor, ClothesColor, HatColor, HairColor, AvatarEnums,
} from 'avatar-angular-kapibara';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css'],
  providers: [
  ]
})
export class ChangeAvatarComponent implements OnInit {

  @ViewChild('avatar') avatar: AvatarAngularKapibaraComponent;

  options: AvatarOptions = new AvatarOptions();

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

  constructor(
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.tops = this.options.getAvatarEnumList('tops', Top);
    this.facialHair = this.options.getAvatarEnumList('facialHair', FacialHair);
    this.clothe = this.options.getAvatarEnumList('clothe', Clothes);
    this.eyes = this.options.getAvatarEnumList('eyes', Eyes);
    this.eyebrow = this.options.getAvatarEnumList('eyebrow', Eyebrow);
    this.mouth = this.options.getAvatarEnumList('mouth', Mouth);
    this.skin = this.options.getAvatarEnumList('skin', Skin);
    this.accessories = this.options.getAvatarEnumList('accessories', Accessories);
    this.clothColor = this.options.getAvatarEnumList('clothColor', ClothesColor);
    this.facialHairColor = this.options.getAvatarEnumList('facialHairColor', FacialHairColor);
    this.graphic = this.options.getAvatarEnumList('graphic', Graphic);
    this.hatColor = this.options.getAvatarEnumList('hatColor', HatColor);
    this.hairColor = this.options.getAvatarEnumList('hairColor', HairColor);
  }

  generateRandom() {
    this.options.getRandom();
  }

  get disabledColourFabric(): boolean {
    if ((this.options.clothes === this.clothesEnum.BLAZER_SHIRT) || (this.options.clothes === this.clothesEnum.BLAZER_SWEATER)) {
      return true;
    }
    return false;
  }

  get disabledHatColour(): boolean {
    if ((this.options.top === this.topsEnum.HIJAB) || (this.options.top === this.topsEnum.TURBAN) ||
      (this.options.top === this.topsEnum.WINTER_HAT1) || (this.options.top === this.topsEnum.WINTER_HAT2) ||
      (this.options.top === this.topsEnum.WINTER_HAT3) || (this.options.top === this.topsEnum.WINTER_HAT4)) {
      return false;
    }
    else return true;
  }

  get disabledHairColour(): boolean {
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

  download(): void {
    this.avatar.onDownloadPNG('avatar-PCLJ.png');
  };

}
