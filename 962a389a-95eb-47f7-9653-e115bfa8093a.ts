export default {
  resource_type: 'book',
  entity: {
    id: '962a389a-95eb-47f7-9653-e115bfa8093a',
    name: '揭发声讨“四人帮”及马、徐、王破坏生产建设的罪行（1976.11.22）',
    internal: false,
    official: false,
    type: 'img',
    author: '市革委会综合计划统计组负责人 韦明，上海市区、县、局党员负责干部会议秘书组1976.11.22印发',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/962a389a-95eb-47f7-9653-e115bfa8093a/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/962a389a-95eb-47f7-9653-e115bfa8093a/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/962a389a-95eb-47f7-9653-e115bfa8093a/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/962a389a-95eb-47f7-9653-e115bfa8093a/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/962a389a-95eb-47f7-9653-e115bfa8093a/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '揭发声讨“四人帮”及马、徐、王破坏生产建设的罪行',
        authors: [
          '韦明',
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
  path: '962a389a-95eb-47f7-9653-e115bfa8093a',
};