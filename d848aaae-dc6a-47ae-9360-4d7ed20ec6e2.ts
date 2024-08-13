export default {
  resource_type: 'book',
  entity: {
    id: 'd848aaae-dc6a-47ae-9360-4d7ed20ec6e2',
    name: '揭发批判“四人帮”把市总工会作为篡党夺权重要据点的滔天罪行（1976.11.22）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共杨浦区委副书记 周新珍，上海市区、县、局党员负责干部会议秘书组1976.11.22印发',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d848aaae-dc6a-47ae-9360-4d7ed20ec6e2/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d848aaae-dc6a-47ae-9360-4d7ed20ec6e2/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d848aaae-dc6a-47ae-9360-4d7ed20ec6e2/3.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '揭发批判“四人帮”把市总工会作为篡党夺权重要据点的滔天罪行',
        authors: [
          '周新珍',
        ],
        page_start: 1,
        page_end: 3,
        dates: [
          {
            year: 1976,
            month: 11,
            day: 22,
          },
        ],
      },
    ],
    ocr: {
      auto_vsplit: true,
      vsplit: 0.5,
      content_thresholds: [
        0,
        0,
        0,
        0,
      ],
      line_merge_threshold: 30,
      standard_paragraph_merge_strategy_threshold: 0,
      differential_paragraph_merge_strategy_threshold: 30,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: 'd848aaae-dc6a-47ae-9360-4d7ed20ec6e2',
};