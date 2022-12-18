export const tabBarScreenOptions = ({ route, navigation }) => ({
  ...TransitionPresets.SlideFromRightIOS, // transition like IOS version
  headerTitleAlign: "center",
  headerStyle: { height: windowHeight * 0.09 }, // header 크기
  tabBarButton: [
    "공지사항",
    "공지사항상세",
    "지역별 유가정보",
    "충전소 정보 결과",
    "보조금 수급현황",
    "차량 · 카드 정보",
    "설정",
    "정보변경",
  ].includes(route.name)
    ? () => null
    : undefined, // 탭바에 표시하지 않을 페이지
  tabBarActiveTintColor: "black",
  tabBarInactiveTintColor: "gray",
  lazy: false,
  unmountOnBlur: true,
  freezeOnBlur: true,
  tabBarStyle: { height: windowHeight * 0.085 },
});