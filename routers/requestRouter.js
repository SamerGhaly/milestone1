const express = require('express')
const router = express.Router()
const verifyToken = require('../authorizations/verifyToken')

const {
  validateSlotLinkingRequest,
} = require('../validations/requestValidation')
const { sendSlotLinking } = require('../controllers/requestController')

router.post(
  '/sendSlotLinking',
  validateSlotLinkingRequest,
  verifyToken,
  sendSlotLinking
)

const {
  validateChangeDayOffRequest,
} = require('../validations/requestValidation')
const { changeDayOffRequest } = require('../controllers/requestController')
const {
  validateAcceptDayOffRequest,
} = require('../validations/requestValidation')
const { acceptDayOffRequest } = require('../controllers/requestController')
const {
  validateRejectDayOffRequest,
} = require('../validations/requestValidation')
const { rejectDayOffRequest } = require('../controllers/requestController')
const {
  validateSickLeavesRequest,
} = require('../validations/requestValidation')
const { sickLeaveRequest } = require('../controllers/requestController')
const {
  validateMaternityLeavesRequest,
} = require('../validations/requestValidation')
const { maternityLeaveRequest } = require('../controllers/requestController')

const {
  validateAcceptSickLeavesRequest,
} = require('../validations/requestValidation')
const { acceptSickLeaveRequest } = require('../controllers/requestController')
const {
  validateRejectSickLeavesRequest,
} = require('../validations/requestValidation')
const { rejectSickLeaveRequest } = require('../controllers/requestController')

const {
  validateAcceptMaternityLeavesRequest,
} = require('../validations/requestValidation')
const {
  acceptMaternityLeaveRequest,
} = require('../controllers/requestController')
const {
  validateRejectMaternityLeavesRequest,
} = require('../validations/requestValidation')
const {
  rejectMaternityLeaveRequest,
} = require('../controllers/requestController')
const {
  validateCancelSickLeavesRequest,
} = require('../validations/requestValidation')
const { cancelSickLeaveRequest } = require('../controllers/requestController')
const {
  validateCancelMaternityLeavesRequest,
} = require('../validations/requestValidation')
const {
  cancelMaternityLeaveRequest,
} = require('../controllers/requestController')
const {
  validateCancelChangeDayOffRequest,
} = require('../validations/requestValidation')
const {
  cancelChangeDayOffRequest,
} = require('../controllers/requestController')

router.post(
  '/changeDayOff',
  validateChangeDayOffRequest,
  verifyToken,
  changeDayOffRequest
)
router.post(
  '/acceptDayOff',
  validateAcceptDayOffRequest,
  verifyToken,
  acceptDayOffRequest
)
router.post(
  '/rejectDayOff',
  validateRejectDayOffRequest,
  verifyToken,
  rejectDayOffRequest
)
router.post(
  '/sickLeave',
  validateSickLeavesRequest,
  verifyToken,
  sickLeaveRequest
)
router.post(
  '/maternityLeave',
  validateMaternityLeavesRequest,
  verifyToken,
  maternityLeaveRequest
)
router.post(
  '/acceptSickLeave',
  validateAcceptSickLeavesRequest,
  verifyToken,
  acceptSickLeaveRequest
)
router.post(
  '/rejectSickLeave',
  validateRejectSickLeavesRequest,
  verifyToken,
  rejectSickLeaveRequest
)
router.post(
  '/acceptMaternityLeave',
  validateAcceptMaternityLeavesRequest,
  verifyToken,
  acceptMaternityLeaveRequest
)
router.post(
  '/rejectMaternityLeave',
  validateRejectMaternityLeavesRequest,
  verifyToken,
  rejectMaternityLeaveRequest
)
router.post(
  '/cancelSickLeaveRequest',
  validateCancelMaternityLeavesRequest,
  verifyToken,
  cancelSickLeaveRequest
)
router.post(
  '/cancelMaternityLeaveRequest',
  validateCancelSickLeavesRequest,
  verifyToken,
  cancelMaternityLeaveRequest
)

router.post(
  '/cancelChangeDayOffRequest',
  validateCancelChangeDayOffRequest,
  verifyToken,
  cancelChangeDayOffRequest
)
module.exports = router
