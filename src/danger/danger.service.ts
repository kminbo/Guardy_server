import { Injectable } from '@nestjs/common';
import { GetDangerInfoDto } from './dto/get-danger-info.dto';
import { GetLocationDto } from './dto/get-location.dto';
import { ChangeModeDto } from './dto/change-mode.dto';

@Injectable()
export class DangerService {
    async getDangerInfo(getDangerInfoDto: GetDangerInfoDto) {
        const { latitude, longitude } = getDangerInfoDto;

        //TODO: 위도, 경도를 받아서 위험 정보를 가져오는 로직 추가
        return {
            location: "도쿄도 스미다구 오시아게 1초메 1-2",
            safetyLevel: 2,
            summary: "오시아게는 전반적으로 안전하나, 늦은 밤 인적 드문 골목은 주의하세요.",
            detail: [
              {
                title: "치안 시설 밀집도",
                content: "도쿄 스카이트리 인근에는 오시아게역 파출소(코반)가 있으며, 쇼핑몰 내에도 보안 인력이 상주하여 치안 접근성이 매우 좋습니다."
              },
              {
                title: "최근 절도 신고",
                content: "관광객이 많은 지역 특성상 소매치기나 자전거 절도 등 경미한 범죄 발생 가능성은 있으나, 심각한 범죄 보고는 적습니다."
              },
              {
                title: "개인 안전 고려사항",
                content: "여성 방문객의 경우, 늦은 밤 인적이 드문 거리는 피하고, 혼잡한 곳에서는 소지품 관리에 유의하세요. 대중교통 이용이 편리하며 안전합니다."
              },
              {
                title: "주변 구글맵 리뷰",
                content: "주변 방문자 리뷰에 따르면 이곳은 활기차고 편리한 쇼핑 및 관광 지역으로 평가됩니다. 안전 문제에 대한 언급은 거의 없으며, 주로 혼잡함에 대한 내용이 있습니다."
              }
            ]
          };
    }

    async getLocationName(dto: GetLocationDto) {
        const { latitude, longitude } = dto;

        //TODO: 위도, 경도를 받아서 위치 이름을 가져오는 로직 추가
        return {
            location: "도쿄도 스미다구 오시아게 1초메 1-2"
        };
    }

    async changeMode(userId: string, dto: ChangeModeDto) {
        //TODO: DB에 mode 업데이트

        return { success: true };
    }
}
