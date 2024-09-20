package golang_examples

import (
	"testing"
	"math/rand/v2"
)

func Test_RateLimitExceeded(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.92 {
		t.Errorf("Rate limit exceeded")
	}
}

func Test_ServiceUnavailable(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.93 {
		t.Errorf("Service unavailable")
	}
}

func Test_InvalidCredentials(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.94 {
		t.Errorf("Invalid credentials provided")
	}
}

func Test_ResourceNotFound(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.91 {
		t.Errorf("Requested resource not found")
	}
}

func Test_InternalServerError(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.89 {
		t.Errorf("Internal server error occurred")
	}
}

func Test_ForbiddenAccess(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.88 {
		t.Errorf("Forbidden access to resource")
	}
}

func Test_BadRequest(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.87 {
		t.Errorf("Bad request sent to API")
	}
}

func Test_ConflictError(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.86 {
		t.Errorf("Conflict error occurred")
	}
}

func Test_GatewayTimeout(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.85 {
		t.Errorf("Gateway timeout error")
	}
}

func Test_UnsupportedMediaType(t *testing.T) {
	randomNumber := rand.Float64()
	if randomNumber > 0.84 {
		t.Errorf("Unsupported media type provided")
	}
}