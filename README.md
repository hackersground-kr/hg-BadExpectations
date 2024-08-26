# 나쁜기대치 - 의성올래

해커그라운드 해커톤에 참여하는 나쁜기대치 팀의 의성올래입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

> **git 설치**
> https://git-scm.com/
> <img width="1071" alt="스크린샷 2024-08-27 오전 1 08 31" src="https://github.com/user-attachments/assets/24af89d1-99de-4c44-be2c-d1e1ac5c557e">
> 빨간 박스 안에 다운로드를 클릭합니다
>window일 경우 
><img width="1064" alt="스크린샷 2024-08-27 오전 1 10 10" src="https://github.com/user-attachments/assets/7ae79e84-34f4-49d9-85fb-57fe27a2b41e">
> macOS일 경우 맥의 경우 command+space를 동시에 눌러 터미널을 검색해 작업터미널을 접속하여 빨간 박스를 하나하나 입렫하여 다운로드 합니다
><img width="1054" alt="스크린샷 2024-08-27 오전 1 11 39" src="https://github.com/user-attachments/assets/0bdb2147-0fcc-4969-badc-fa38614aa334">
> 
> **docker desktop 설치**
> 
> 
> mac : https://docs.docker.com/desktop/install/mac-install/
>
> <img width="1470" alt="스크린샷 2024-08-27 오전 1 44 39" src="https://github.com/user-attachments/assets/ef24c02d-73bd-4994-a286-9779f505e95c">
>
> 인텔칩을 사용중이라면 인텔칩 도커 사용(대부분 인텔 스티커가 붙어 있음)
> 그가 아니라면 애플 실리콘칩 도커 사용
> 
><img width="1469" alt="스크린샷 2024-08-27 오전 1 47 49" src="https://github.com/user-attachments/assets/9db969e2-b0fd-4cff-b6b3-936860010a1b">
>
> windows : https://docs.docker.com/desktop/install/windows-install/
> 대부분의 경우에 x86_64 사용하나 안될 경우 Arm 버전 사용
> 
>
> **깃허브 회원가입**
> https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home
> 
><img width="1470" alt="스크린샷 2024-08-27 오전 1 51 15" src="https://github.com/user-attachments/assets/4d75ba44-c32b-421f-add5-070bfbe4d076">
>
>빨간 박스로 회원가입을 합니다
>
><img width="1345" alt="스크린샷 2024-08-27 오전 1 52 35" src="https://github.com/user-attachments/assets/adbe391e-5a66-4727-a467-3591f1a29cca">
>이곳에 자신의 이메일을 작성 
><img width="1470" alt="스크린샷 2024-08-27 오전 1 54 50" src="https://github.com/user-attachments/assets/f464a847-4087-4f74-a7bf-8fcf77aefb5f">
>그후 질문에 대한 답들을 적어주면 됩니다
>마지막 동의 까지 하고 초록 버튼 클릭
>
> <img width="719" alt="스크린샷 2024-08-27 오전 1 55 55" src="https://github.com/user-attachments/assets/57e1c3f3-1ed8-430e-8988-e6614af819f2">
>이메일로 받은 코드를 이곳에다가 작성합니다
>
> <img width="738" alt="스크린샷 2024-08-27 오전 1 56 52" src="https://github.com/user-attachments/assets/6aaa7492-689a-40ec-afbf-a66c3fcf2e23">
> 코드 인증 성공시 깃허브를 어떤식으로 사용할지 작성하는 칸이 있는데 자신이 사용할 목적을 선택하면 됩니다
>
> <img width="733" alt="스크린샷 2024-08-27 오전 1 58 10" src="https://github.com/user-attachments/assets/5d832eec-4177-41d0-802d-d42a9b97107f">
>그후 어떤 조직도를 사용할것인지 물어보는데 우리는 회사가 아니기때문에 그저 free로 선택합니다
>그러면 회원가입 성공입니다 
>
> **자바 jdk-17**
>
><img width="1470" alt="스크린샷 2024-08-27 오전 2 01 14" src="https://github.com/user-attachments/assets/05491707-ff12-4330-8462-a3d4b9d34916">
>
>들어오면 이렇게 뜨는데 빨간색박스에 있는 jdk17을 다운로드 하면됩니다
>
> 설치 사이트 : https://www.oracle.com/java/technologies/downloads/#jdk17-windows
> 
> 
>그중 windows는 x64 Installer	를 사용
><img width="1381" alt="스크린샷 2024-08-27 오전 2 02 22" src="https://github.com/user-attachments/assets/1ec656c2-9041-47bb-a845-f97983b00100">
>
> mac(apple chip)은 ARM64 DMG Installer 사용
>
><img width="1256" alt="스크린샷 2024-08-27 오전 2 02 55" src="https://github.com/user-attachments/assets/82195c6c-bd5d-48d1-ac77-a6b05156db1c">
> 
> 또다른 mac(intel chip)인텔칩을 사용하는 맥북 x64 DMG Installer 사용
>
><img width="1467" alt="스크린샷 2024-08-27 오전 2 04 10" src="https://github.com/user-attachments/assets/3b4948eb-0884-4bd5-8c44-4f5e832de4ee">


## 시작하기
> https://portal.azure.com/ 에 접속해 로그인을 진행하고 왼쪽 상단의 리소스 만들기 버튼을 클릭해 Azure Database for MySQL를 검색하여 누르고 만들기를 클릭한 후 유연한 서버를 만드는 것을 선택한다.
> ![image](https://github.com/user-attachments/assets/3fb4a8c2-6fc9-4a90-a0ca-3e362622e169)
>
><img width="498" alt="스크린샷 2024-08-26 오후 4 58 58" src="https://github.com/user-attachments/assets/50bb8783-7850-4c0e-ac3f-14edbe3d6570">
> 
> 그 후, 리소스 그룹과 서버이름을 입력하고 관리자 이름을 입력하고 암호를 자유롭게 입력한다.
>
><img width="729" alt="스크린샷 2024-08-26 오후 4 04 32" src="https://github.com/user-attachments/assets/a9e100dd-4b43-4e23-9a6e-b678b300ad49">
> 
>
> 네트워킹에서 방화벽 설정을 0.0.0.0~255.255.255.255로 설정한다. 
> 
> 그 후, 검토 및 만들기를 통해 DB를 만든다.
> 
> github에서 hackersground-kr organization의 hg-BadExpectations 레포지토리를 클릭한다.

> <img width="1470" alt="스크린샷 2024-08-27 오전 12 59 50" src="https://github.com/user-attachments/assets/16a62baa-e1e5-4d70-91b5-6e8b72b2d375">

> 오른쪽 흰색 박스의 Fork버튼을 눌러 Copy the main branch only 항목을 선택 취소한 후, Create fork 버튼을 눌러 fork를 한다.
> 
> fork한 레포지토리로 이동하여 초록색 < >code 버튼을 클릭한다. 그 후, https 칸을 클릭하여 https://github.com/dongchandev/hg-BadExpectations.git 을 복사한다.
> 
> 컴퓨터에 임의의 폴더 하나를 만들고, 윈도우의 경우 하단의 돋보기 모양 아이콘을 클릭하여 cmd를 치고 맥의 경우 command+space를 동시에 눌러 터미널을 검색해 작업터미널을 접속하여 앞서 만든 폴더를 윈도우의 경우 shift + 우클릭하여 경로를 복사하고 맥의 경우 우클릭을 통해 정보보기를 클릭하여 경로를 복사하고 cd + / 를 한 후 cd + 복사한 경로를 입력해 git init을 입력한다. 그 후, 복사한 https://github.com/dongchandev/hg-BadExpectations.git 를 통해 git remote add origin https://github.com/dongchandev/hg-BadExpectations.git 을 적어 원격 브랜치와 연결한다.
> 
> git pull origin backend,git checkout backend 를 차례대로 입력한다.
> 
> 도커 데스크탑을 실행하여 도커 실행하기
> 
> curl -fsSL https://aka.ms/install-azd.sh | bash, azd auth login 을 차례대로 입력한다.
> 
> azd init -e BadExpectations를 입력한 후, Use code in the current directory를 선택하고 그 다음 Confirm and continue initializing my app를 선택합니다
> 
> 그 후,  azd up를 입력하고 git add . , git commit -m "init" , git push origin backend 를 차례대로 입력합니다
> 
> azd pipeline config 를 입력하고 첫번째 선택지에서 n을 선택합니다
> 
> gh auth login을 입력하여 깃허브 로그인을 진행하고 다시 커맨드 창으로 돌아와서
```
gh secret set DB_PASSWORD --body "<DB_PASSWORD>"
gh secret set DB_URL --body "<DB_URL>"
gh secret set DB_USERNAME --body "<DB_USERNAME>"
gh secret set DOCKER_PASSWORD --body "<DOCKER_PASSWORD>"
gh secret set DOCKER_USERNAME --body "<DOCKER_USERNAME>"
>
```
>해당 명령어를 입력합니다 이 떄 <>안의 값은 실제값으로 대체합니다. DB_PASSWORD와 DB_USERNAME가장 앞부분 db를 만들 때 설정했었고, DB_URL은 https://portal.azure.com 에서 만든 DB를 찾으면 기술되어 있습니다.
> 
> 그 후, https://github.com/사용자 이름/hg-BadExpectations 으로 접속하여 Actions 페이지로 이동해 가장 최근 git action을 들어가 Re-run all jobs 버튼을 누릅니다.
><hr/>
> ** 상세한 배포 방법!!**
>
> <img width="1469" alt="스크린샷 2024-08-26 오후 10 55 05" src="https://github.com/user-attachments/assets/057ef0e8-3e6e-4a92-8161-0bba631ad6c5">
>
> 여기 위에 희색으로 표시된 Actions 클릭 
>
> <img width="1470" alt="스크린샷 2024-08-26 오후 10 58 16" src="https://github.com/user-attachments/assets/adfe5ef8-23a0-4bbf-b51c-a05fdb1d028c">
>
> 이 힌색부분을 누르고
>
> <img width="1470" alt="스크린샷 2024-08-26 오후 10 58 16" src="https://github.com/user-attachments/assets/54fec6fe-bfb7-4f55-acdc-f6b1fda54912">
>
> 여기 왼쪽의 Deploy to Azure Container Apps를 클릭하시고
>
> <img width="1470" alt="스크린샷 2024-08-26 오후 11 00 45" src="https://github.com/user-attachments/assets/657d829e-de7b-4efd-9fb7-a19443ee007b">
>
> 오른쪽의 Run workflow클릭 후 Branch가 main인지 확인 후 초록버튼인 Run workflow를 클릭합니다
>
> <img width="1470" alt="스크린샷 2024-08-26 오후 11 01 28" src="https://github.com/user-attachments/assets/f0b295f8-475e-4f32-b04b-21f9e3249b3c">
>
> 그후 페이지를 새로고침을 하면 액션하나가 작동합니다
> 기다리시다 초록불이 뜨면 액션으로 배포까지 성공했습니다 
> 축하드립니다
>

