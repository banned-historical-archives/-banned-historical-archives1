export default {
  resource_type: 'book',
  entity: {
    id: '70a44015-6220-4f84-b45c-53201ac27489',
    name: '我揭发10月13日上海反革命政变事件的内幕（1976.10.19）',
    internal: false,
    official: false,
    type: 'img',
    author: '马振龙',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/70a44015-6220-4f84-b45c-53201ac27489/7.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '马振龙关于十月十三日上海未遂暴动事件的揭发交代',
        alias: '我揭发10月13日上海反革命政变事件的内幕',
        authors: [
          '马振龙',
        ],
        page_start: 1,
        page_end: 7,
        dates: [
          {
            year: 1976,
            month: 10,
            day: 19,
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
  path: '70a44015-6220-4f84-b45c-53201ac27489',
};