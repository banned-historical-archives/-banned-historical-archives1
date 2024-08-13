export default {
  resource_type: 'book',
  entity: {
    id: 'a8e0ece1-dedf-46f6-876b-d481750a8c6f',
    name: '愤怒声讨“四人帮”利用新闻工具为篡党夺权大造反革命舆论的滔天罪行（1976.11.22）',
    internal: false,
    official: false,
    type: 'img',
    author: '解放日报党委书记 王景，上海市区、县、局党员负责干部会议秘书组1976.11.22印发',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a8e0ece1-dedf-46f6-876b-d481750a8c6f/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a8e0ece1-dedf-46f6-876b-d481750a8c6f/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a8e0ece1-dedf-46f6-876b-d481750a8c6f/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a8e0ece1-dedf-46f6-876b-d481750a8c6f/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a8e0ece1-dedf-46f6-876b-d481750a8c6f/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '愤怒声讨“四人帮”利用新闻工具为篡党夺权大造反革命舆论的滔天罪行',
        authors: [
          '王景',
        ],
        page_start: 1,
        page_end: 4,
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
  path: 'a8e0ece1-dedf-46f6-876b-d481750a8c6f',
};