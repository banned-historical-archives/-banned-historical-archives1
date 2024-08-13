export default {
  resource_type: 'book',
  entity: {
    id: '78e7e986-bc70-4f6f-8c4c-dde72806a861',
    name: '“四人帮”反党集团及其一伙破坏教育革命的言论摘编（1976.12.13）',
    internal: false,
    official: false,
    type: 'img',
    author: '上海师大党委材料组',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/9.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/10.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/78e7e986-bc70-4f6f-8c4c-dde72806a861/11.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '“四人帮”反党集团及其一伙破坏教育革命的言论摘编',
        authors: [
          '上海师大党委材料组',
        ],
        page_start: 1,
        page_end: 11,
        dates: [
          {
            year: 1976,
            month: 12,
            day: 13,
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
  path: '78e7e986-bc70-4f6f-8c4c-dde72806a861',
};