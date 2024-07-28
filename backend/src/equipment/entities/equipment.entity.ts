import { ApiProperty } from "@nestjs/swagger";
import { Property } from "./../../properties/entities/property.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('equipment')
export class Equipment {

  @ApiProperty({ example: 1, description: 'The unique identifier of the equipment' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ 
    example: ['WiFi', 'Air Conditioning', 'Heating'], 
    description: 'A list of equipment available at the property' 
  })
  @Column('simple-array')
  listEquipment: string[];

  @ApiProperty({ type: () => Property, description: 'The property to which the equipment belongs' })
  @ManyToOne(() => Property, (property) => property.equipments)
  property: Property;


}
