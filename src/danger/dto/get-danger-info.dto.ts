import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class GetDangerInfoDto {
    @ApiProperty({description: '위도'})
    @IsNumber()
    latitude: number;

    @ApiProperty({description: '경도'})
    @IsNumber()
    longitude: number;
}