export default {
  "entity": {
    "id": "9172bd1f-5918-4850-820a-b229e2d89b8f",
    "name": "王洪文副主席重要电话指示（1974.3.16）",
    "internal": false,
    "official": true,
    "type": "img",
    "author": "王洪文，1976.3.16",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/9172bd1f-5918-4850-820a-b229e2d89b8f/1.jpg"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "jpg",
    "articles": [
      {
        "title": "王洪文副主席重要电话指示",
        "authors": [
          "王洪文"
        ],
        "page_start": 1,
        "page_end": 1,
        "ocr_exceptions": {
          "1": {
            "content_thresholds": [
              0.14,
              0,
              0,
              0
            ]
          }
        },
        "dates": [
          {
            "year": 1974,
            "month": 3,
            "day": 16
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
  "path": "9172bd1f-5918-4850-820a-b229e2d89b8f",
  "resource_type": "book",
  "version": 2
};