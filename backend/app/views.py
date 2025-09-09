from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def test_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_input = data.get("data", "")
            # You can add your processing logic here
            return JsonResponse({"message": f"You sent: {user_input}"})
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON"}, status=400)
    return JsonResponse({"message": "Only POST method allowed"}, status=405)
