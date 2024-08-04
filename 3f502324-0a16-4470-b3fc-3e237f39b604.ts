export default {
  "entity": {
    "id": "3f502324-0a16-4470-b3fc-3e237f39b604",
    "name": "王洪文和马天水的谈话（1974.3）",
    "internal": false,
    "official": false,
    "type": "img",
    "author": "王洪文，1974.3",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3f502324-0a16-4470-b3fc-3e237f39b604/1.png"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "png",
    "articles": [
      {
        "title": "王洪文和马天水的谈话",
        "alias": "王洪文付主席和马天水同志的谈话",
        "authors": [
          "王洪文"
        ],
        "page_start": 1,
        "page_end": 1,
        "ocr_exceptions": {
          "1": {
            "content_thresholds": [
              0,
              0.1,
              0,
              0
            ]
          }
        },
        "dates": [
          {
            "year": 1974,
            "month": 3
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      }
    ],
    "ocr_exceptions": {}
  },
  "parser_id": "automation",
  "path": "3f502324-0a16-4470-b3fc-3e237f39b604",
  "resource_type": "book",
  "version": 2
};