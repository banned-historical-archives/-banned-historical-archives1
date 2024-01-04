export default {
  entity: {
    id: '5551106b-99c0-496b-af47-d8335692e6ca',
    name: '毛远新在京沈阳三派代表批斗宋任穷会上的讲话（1968.4.10）',
    internal: false,
    official: true,
    type: 'img',
    author: '毛远新，1968.4.10，沈报联委会《曙光在前》翻印',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5551106b-99c0-496b-af47-d8335692e6ca/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5551106b-99c0-496b-af47-d8335692e6ca/2.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '毛远新同志在京沈阳三派代表批斗宋任穷会上的讲话',
        alias:
          '毛远新同志的讲话——四月八日在京沈阳三派代表批斗宋任穷会议上的讲话',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 2,
        tags: [
          { name: '沈报联委会《曙光在前》', type: 'reprint' }, // 翻印/传抄
        ],
        dates: [{ year: 1968, month: 4, day: 8 }],
      },
    ],
    ocr: { content_thresholds: [0.18, 0.08, 0.09, 0.21] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/5551106b-99c0-496b-af47-d8335692e6ca',
};
