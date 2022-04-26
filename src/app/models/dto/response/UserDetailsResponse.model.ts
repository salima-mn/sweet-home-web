import {AddressDtoModel} from "../AddressDto.model";
import {RoleCode} from "../../../enums/role-code";

export class UserDetailsResponseModel {

  userFirstName:string;
  userLastName:string;
  userDateInscription:Date;
  userEmail:string;
  userPhoneNumber:string;
  userBirthDate:Date;
  userAddress:AddressDtoModel;
  role: RoleCode;


  constructor(userFirstName: string, userLastName: string, userDateInscription: Date,
              userEmail: string, userPhoneNumber: string, userBirthDate: Date,
              userAddress: AddressDtoModel, role: RoleCode) {
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userDateInscription = userDateInscription;
    this.userEmail = userEmail;
    this.userPhoneNumber = userPhoneNumber;
    this.userBirthDate = userBirthDate;
    this.userAddress = userAddress;
    this.role = role;
  }
}
