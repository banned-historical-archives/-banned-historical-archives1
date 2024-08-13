export default {
  resource_type: 'book',
  entity: {
    id: 'c9660ed1-e3e9-4355-9426-02becc773b50',
    name: '揭发舒龙山与四人帮材料附件（1976.10.6+）',
    internal: false,
    official: false,
    type: 'img',
    author: '七机部二院材料 723',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c9660ed1-e3e9-4355-9426-02becc773b50/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c9660ed1-e3e9-4355-9426-02becc773b50/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c9660ed1-e3e9-4355-9426-02becc773b50/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c9660ed1-e3e9-4355-9426-02becc773b50/4.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '揭发舒龙山与四人帮材料附件',
        authors: [
          '七机部',
        ],
        page_start: 1,
        page_end: 4,
        dates: [
          {
            year: 1977,
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
  path: 'c9660ed1-e3e9-4355-9426-02becc773b50',
};