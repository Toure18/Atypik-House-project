import { Property } from "./../../properties/entities/property.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('equipment')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array')
  listEquipment: string[];

  @ManyToOne(() => Property, (property) => property.equipments)
  property: Property;


}
