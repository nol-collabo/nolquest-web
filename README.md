# html 코드 실행 방법
1. (내용의 업데이트가 필요함)
2. git clone
3. yarn or (npm i)
4. type `gulp`
5. http://localhost:8045

##### 최종 전달용 HTML 생성. 우리는 public 폴더 아래 자료만 전달합니다.
1. 프로젝트 루트에서 `node export.js` 실행
  1. 실행 시 로컬에서 gulp가 실행 중인지 확인. 실행 중이어야 크롤링됩니다.
  

# 프로그램 동작 url
1. start 
- 환경안내: http://localhost:8045/info_environment.html
- 수남장마당: http://localhost:8045/start.html
- 등록: http://localhost:8045//login.html 
  - *111로 아이디 입력하시면 이름입력 페이지로 이동합니다.
- 이름입력: http://localhost:8045/input_name.html
- 직업선택: http://localhost:8045/interest.html

2. main 
- 아이템 있을 경우: http://localhost:8045/index.html
  - *111로 코드번호 입력하시면 팝업이 노출됩니다.
- 아이템 없을 경우: http://localhost:8045/index_mission_empty.html

3. my_status
- 내 상태: http://localhost:8045/my_status.html

4. mission_issue
- 미션 발급소: http://localhost:8045/mission_issue01.html
- 미션 3개 이상: http://localhost:8045/mission_issue_no.html

5. mission_check
- 로딩: http://localhost:8045/mission_issue_check_loading.html
- 미션 확인소: http://localhost:8045/mission_issue_check.html
- 미션이 틀릴 경우: http://localhost:8045/mission_wrong.html
- 미션이 부족할 경우: http://localhost:8045/mission_wrong02.html
  - 체크/엑스 버튼 에셋이 필요합니다. 제플린으로 요쳥하겠습니다. 
- 미션 완료: http://localhost:8045/mission_correct.html
- 레벨업: http://localhost:8045/mission_levelup.html

  
# 외부 라이브러리 사용 현황
- bootstrap 3.3.7
- jquery 2.2.4
- slick-carousel 1.8.1
