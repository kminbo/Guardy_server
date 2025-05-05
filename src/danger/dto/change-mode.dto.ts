import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ChangeModeDto {
    @ApiProperty({description: '모드(safe / sleeping'})
    @IsString()
    mode: string;
}
