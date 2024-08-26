import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 999px;
  align-items: center;
`;

export const ReservationBox = styled.div`
  display: flex;
  width: 330px;
  height: 137px;
  margin-top: 48px;
  border-radius: 13px;
  border-width: 1px;
  border-color: #dedede;
  border-style: solid;
`;

export const Title = styled.span`
  display: flex;
  align-self: flex-start;
  font-size: 13px;
  font-weight: 800;
  margin-left: 57px;
  margin-top: 35px;
`;

export const MapContainer = styled.div`
  width: 330px;
  height: 345px;
  border-radius: 8px;
  background-color: #dedede;
  margin: 19px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 174px;
  border-radius: 13px;
  border-width: 1px;
  border-color: #dedede;
  border-style: solid;
  margin-top: 30px;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  width: 294px;
  height: 65px;
  border-bottom-width: 1px;
  border-color: #dedede;
  border-bottom-style: solid;
  flex-direction: row;
`;

export const InfoBlock = styled.div`
  display: flex;
  width: 115px;
  height: 65px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export const InfoSubtitle = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: #bebdbd;
`;

export const ProgressBarContainer = styled.div`
  width: 152px;
  height: 12px;
  border-radius: 8px;
  background-color: #f1f1f1;
  margin: 19px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  width: 40px;
  height: 12px;
  border-radius: 8px;
  background-color: #ffa800;
`;

export const GuideInfoRow = styled(InfoRow)`
  height: 54px;
  justify-content: flex-start;
`;

export const GuideInfoBlock = styled.div`
  display: flex;
  width: 59px;
  height: 54px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 22px;
`;

export const GuideInfoText = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export const GuideInfoRight = styled.div`
  display: flex;
  width: 156px;
  height: 54px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: 22px;
`;

export const GuideName = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #bebdbd;
`;

export const Arrow = styled.span`
  font-size: 12px;
  font-weight: 900;
  color: #ffa800;
  margin-left: 4px;
`;
